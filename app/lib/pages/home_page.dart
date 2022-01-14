import 'package:app/widgets/text_button_widget.dart';
import 'package:expansion_tile_card/expansion_tile_card.dart';
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

import 'package:app/pages/encuesta_page.dart';
import 'package:app/widgets/load_widget.dart';
import 'package:app/widgets/message_widget.dart';
import 'package:app/schemas/encuesta_schema.dart';
import 'package:app/database/db.dart';
import 'package:app/provider/connection_status_model.dart';
import 'package:app/models/encuesta.dart';
import 'package:app/services/encuesta_service.dart';

class HomePage extends StatefulWidget {
  static const String routeName = 'home-page';
  final List<Encuesta>? encuestas;
  const HomePage({
    Key? key,
    this.encuestas,
  }) : super(key: key);

  @override
  State<HomePage> createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  bool isLoading = true;
  bool encuestasGuardadas = false;

  Future<void> updateState() async {
    int cantidadEncuestas = await DB.countEncuestas();
    setState(() {
      encuestasGuardadas = cantidadEncuestas > 0;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Center(child: Text('Lista de encuestas')),
      ),
      body: MultiProvider(
        providers: [
          ChangeNotifierProvider<ConnectionStatusModel>(
            create: (_) => ConnectionStatusModel(),
            child: Consumer<ConnectionStatusModel>(
              builder: (_, model, __) {
                if (model.isOnline) {
                  return listaEncuestas(
                    future: encuestasGuardadas
                        ? DB.obtenerEncuestas()
                        : EncuestaService.obtenerEncuestas(),
                    guardarEncuesta: !encuestasGuardadas,
                  );
                } else {
                  if (encuestasGuardadas) {
                    return listaEncuestas(
                      future: DB.obtenerEncuestas(),
                      guardarEncuesta: false,
                      conectado: false,
                    );
                  } else {
                    return const MessageWidget(
                      title: 'NO HAY ACCESO A INTERNET',
                      description:
                          'Debe conectarse a internet y cargar las encuestas al menos una vez',
                    );
                  }
                }
              },
            ),
          ),
        ],
      ),
    );
  }

  Widget listaEncuestas({
    required Future<List<Encuesta>?>? future,
    required bool guardarEncuesta,
    bool conectado = true,
  }) {
    return FutureBuilder<List<Encuesta>?>(
      future: future,
      builder: (BuildContext context, AsyncSnapshot<List<Encuesta>?> snapshot) {
        if (snapshot.hasData) {
          return ListView.builder(
            itemCount: snapshot.data!.length,
            itemBuilder: (BuildContext context, int index) {
              Encuesta? encuesta = snapshot.data![index];
              if (guardarEncuesta) {
                EncuestaSchema encuestaSchema = EncuestaSchema(
                  encuesta: encuestaToMap(encuesta),
                  encuestaId: encuesta.id,
                );
                DB.insert(encuestaSchema);
                updateState();
              }

              final GlobalKey<ExpansionTileCardState> card = GlobalKey();
              return Padding(
                padding: const EdgeInsets.symmetric(
                  horizontal: 15.0,
                  vertical: 10.0,
                ),
                child: ExpansionTileCard(
                  key: card,
                  leading: CircleAvatar(child: Text((index + 1).toString())),
                  title: Text(encuesta.titulo!),
                  subtitle: const Text('¡Ver más!'),
                  children: <Widget>[
                    const Divider(
                      thickness: 1.0,
                      height: 1.0,
                    ),
                    Align(
                      alignment: Alignment.centerLeft,
                      child: Padding(
                        padding: const EdgeInsets.only(
                          top: 20.0,
                          left: 30.0,
                          right: 30.0,
                        ),
                        child: Text(
                          encuesta.descripcion!,
                          style: Theme.of(context)
                              .textTheme
                              .bodyText2!
                              .copyWith(fontSize: 16, height: 1.45),
                          textAlign: TextAlign.justify,
                        ),
                      ),
                    ),
                    ButtonBar(
                      alignment: MainAxisAlignment.spaceAround,
                      buttonHeight: 52.0,
                      buttonMinWidth: 90.0,
                      children: <Widget>[
                        TextButtonWidget(
                          onPressed: () {
                            card.currentState?.collapse();
                          },
                          text: 'Cerrar',
                          icon: Icons.close,
                        ),
                        TextButtonWidget(
                          onPressed: () {
                            if (conectado) {}
                            Navigator.of(context).push(
                              MaterialPageRoute(
                                builder: (BuildContext context) => EncuestaPage(
                                  encuesta: encuesta,
                                ),
                              ),
                            );
                          },
                          text:
                              conectado ? 'Realizar encuesta' : 'Ver encuesta',
                          icon: Icons.add_task_outlined,
                        ),
                      ],
                    ),
                  ],
                ),
              );
            
            
            },
          );
        } else {
          return const LoadWidget(
            title: 'Cargando encuestas...',
          );
        }
      },
    );
  }
}
