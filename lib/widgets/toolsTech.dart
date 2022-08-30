import 'package:flutter/material.dart';
import 'package:myportfolio/constants.dart';
import 'package:myportfolio/widgets/toolsTechWidget.dart';
import 'package:google_fonts/google_fonts.dart';

class ToolsTech extends StatelessWidget {
  TextStyle _textStyle(double fSize, bool bold) {
    return GoogleFonts.doHyeon(
      fontSize: fSize ?? 14,
      fontWeight: !bold ? FontWeight.w100 : FontWeight.w400,
      letterSpacing: 1.0,
      height: 2.0,
      color: Colors.amber,
    );
  }
  @override
  Widget build(BuildContext context) {
    double width = MediaQuery.of(context).size.width;
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text("Technologies We have worked with:\n",
            style: _textStyle(20, true),),
        Row(
            mainAxisSize: MainAxisSize.min,
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  for (int i = 0; i < myTools.length; i++)
                    ToolTechWidget(
                      techName: myTools[i],
                    ),
                  for (int i = 0; i < myTools1.length; i++)
                    (width >= 600 && width <= 950)
                        ? ToolTechWidget(
                            techName: myTools1[i],
                          )
                        : Container(),
                ],
              ),
              (width <= 600 || width >= 950)
                  ? SizedBox(
                      width: MediaQuery.of(context).size.width * 0.04,
                    )
                  : SizedBox(),
              (width <= 600 || width >= 950)
                  ? Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        for (int i = 0; i < myTools1.length; i++)
                          ToolTechWidget(
                            techName: myTools1[i],
                          ),
                      ],
                    )
                  : Container(),
            ])
      ],
    );
  }
}
