import 'package:flutter/material.dart';

class LoadWidget extends StatelessWidget {
  final String title;
  const LoadWidget({
    Key? key,
    this.title = 'Cargando...',
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Center(
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        crossAxisAlignment: CrossAxisAlignment.center,
        children: <Widget>[
          Padding(
            padding: const EdgeInsets.all(10.0),
            child: SizedBox(
              width: 300.0,
              child: Center(
                child: Text(
                  title,
                  textAlign: TextAlign.center,
                ),
              ),
            ),
          ),
          const Padding(
            padding: EdgeInsets.all(30.0),
            child: SizedBox(
              height: 60.0,
              width: 60.0,
              child: CircularProgressIndicator(
                strokeWidth: 6.5,
              ),
            ),
          ),
        ],
      ),
    );
  }
}