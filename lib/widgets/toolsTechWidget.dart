import 'package:flutter/material.dart';
import 'package:myportfolio/constants.dart';

class ToolTechWidget extends StatelessWidget {
  final String techName;

  const ToolTechWidget({Key key, this.techName}) : super(key: key);
  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: EdgeInsets.symmetric(vertical: 16.0),
      child: Row(
        children: [
          Icon(
            Icons.play_arrow,
            color: ArrowColor,
            size: MediaQuery.of(context).size.height * 0.02,
          ),
          Text(" $techName")
        ],
      ),
    );
  }
}
