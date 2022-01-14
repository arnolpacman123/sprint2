class EncuestaSchema {
  int? id;
  String? encuesta;
  String? encuestaId;
  EncuestaSchema({this.id, this.encuesta, this.encuestaId});

  factory EncuestaSchema.fromMap(Map<String, dynamic> json) => EncuestaSchema(
        id: json["id"],
        encuesta: json["encuesta"],
        encuestaId: json["encuesta_id"],
      );

  Map<String, dynamic> toMap() => {
        "id": id,
        "encuesta": encuesta,
        "encuesta_id": encuestaId,
      };
}
