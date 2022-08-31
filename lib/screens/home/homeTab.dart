import 'package:animated_text_kit/animated_text_kit.dart';
import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:myportfolio/constants.dart';
import 'package:myportfolio/widgets/socialMediaIcon.dart';

class HomeTab extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    double height = MediaQuery.of(context).size.height;
    double width = MediaQuery.of(context).size.width;

    return Container(
      height: height,
      width: width,
      child: Stack(
        children: [
          Positioned(
            bottom: width < 740 ? height * 0.1 : height * 0.15,
            right: width < 740 ? -width * 0.2 : -width * 0.1,
            child: Opacity(
              opacity: 0.8,
              child: Image.asset('assets/images/port.png', height: height * 0.75),
            ),
          ),
          Container(
            margin: EdgeInsets.fromLTRB(
                width * 0.1, width < 740 ? height * 0.15 : height * 0.2, 0, 0),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                RichText(
                    text : TextSpan(
                        text: 'Metis',
                        style: GoogleFonts.montserrat(
                            fontSize:
                            width < 1200 ? height * 0.085 : height * 0.095,
                            fontWeight: FontWeight.w500,
                            letterSpacing: 5.0,color: Colors.indigo),
                        children: <TextSpan>[
                          TextSpan(
                            text:'X',
                            style: GoogleFonts.montserrat(
                                fontSize:
                                width < 1200 ? height * 0.085 : height * 0.095,
                                fontWeight: FontWeight.w500,
                                letterSpacing: 5.0,color: Colors.amber),
                          )
                        ]
                    )
                ),
                SizedBox(
                  height: height * 0.045,
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }
}
