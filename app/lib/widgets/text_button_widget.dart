import 'package:flutter/material.dart';
import 'package:app/styles/styles.dart' as styles;

class TextButtonWidget extends StatelessWidget {
  final void Function()? onPressed;
  final IconData? icon;
  final String text;
  const TextButtonWidget({
    Key? key,
    this.onPressed,
    this.icon,
    required this.text,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return TextButton(
      style: styles.flatButtonStyle,
      onPressed: onPressed,
      child: Column(
        children: <Widget>[
          Icon(icon),
          const Padding(
            padding: EdgeInsets.symmetric(vertical: 2.0),
          ),
          Text(text),
        ],
      ),
    );
  }
}
