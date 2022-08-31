import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';

class AboutMeText extends StatelessWidget {
  final TextAlign textAlign;
  final double fontSize;

  const AboutMeText({Key key, this.textAlign, this.fontSize}) : super(key: key);

  TextStyle _textStyle(double fSize, bool bold) {
    return GoogleFonts.notoSans(
      fontSize: fSize ?? 14,
      fontWeight: !bold ? FontWeight.w100 : FontWeight.w400,
      letterSpacing: 1.0,
      height: 2.0,
      color: Colors.white,
    );
  }

  TextStyle _textStyle2(double fSize, bool bold) {
    return GoogleFonts.notoSans(
      fontSize: fSize ?? 14,
      fontWeight: !bold ? FontWeight.w100 : FontWeight.w400,
      letterSpacing: 1.0,
      height: 2.0,
      color: Colors.amber,
    );
  }

  TextStyle _textStyle3(double fSize, bool bold) {
    return GoogleFonts.doHyeon(
      fontSize: fSize ?? 14,
      fontWeight: !bold ? FontWeight.w100 : FontWeight.w400,
      letterSpacing: 1.0,
      height: 2.0,
      color: Colors.indigo,
    );
  }

  @override
  Widget build(BuildContext context) {
    return RichText(
      textAlign: textAlign ?? TextAlign.left,
      text: TextSpan(children: [
        TextSpan(
          text:
              "Hi there 👋, This is MetisX.\n\n소개글 ~~~~\n소개글~~~ 소개글 ~~~\n",
          style: MediaQuery.of(context).size.width < 600
              ? _textStyle(fontSize, true)
              : _textStyle(fontSize + 2, false),
        ),
        TextSpan(
          text: "다른색상 으로 소개글?\n\n",
          style: MediaQuery.of(context).size.width < 600
              ? _textStyle2(fontSize, true)
              : _textStyle2(fontSize + 2, false),
        ),
        TextSpan(
          text: "다른 스타일로 소개글?",
          style: MediaQuery.of(context).size.width < 600
              ? _textStyle3(fontSize + 8, true)
              : _textStyle3(fontSize + 8, true),
        )
      ]),
    );
  }
}
