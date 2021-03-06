var respecConfig = {
  specStatus: "ED",
  // if there a publicly available Editor's Draft, this is the link
  edDraftURI: "https://w3c.github.io/webrtc-svc/",
  shortName: "webrtc-svc",
  editors:  [
    //              { name: "Your Name", url: "http://example.org/",
    //                company: "Your Company", companyURL: "http://example.com/" },
    { name: "Bernard Aboba", company: "Microsoft Corporation",
      w3cid: "65611"
    }
  ],
  formerEditors: [
    { name: "Peter Thatcher", company: "Google", w3cid: "68236", retiredDate: "2019-12-31" }
  ],
  authors: [
  ],
  wg: "Web Real-Time Communications Working Group",
  wgURI: "https://www.w3.org/2011/04/webrtc/",
  wgPublicList: "public-webrtc",
  wgPatentURI:  "https://www.w3.org/2004/01/pp-impl/47318/status",
  issueBase: "https://github.com/w3c/webrtc-svc/issues",
  xref: ["webidl", "webrtc"],
  otherLinks: [
    {
      key: "Participate",
      data: [
        {
          value: "Mailing list",
          href: "https://lists.w3.org/Archives/Public/public-webrtc/"
        },
        {
          value: "Browse open issues",
          href: "https://github.com/w3c/webrtc-svc/issues"
        },
        {
          "value": "IETF AVTCORE Working Group",
          "href": "https://tools.ietf.org/wg/avtcore/"
        }
      ]
    }
  ],
  localBiblio: {
    "IANA-STUN-6": {
      "title": "STUN Error Codes",
      "href": "https://www.iana.org/assignments/stun-parameters/stun-parameters.xhtml#stun-parameters-6",
      "publisher": "IANA"
    },
    "AV1-RTP": {
      "title": "RTP Payload Format for AV1",
      "href": "https://aomediacodec.github.io/av1-rtp-spec/",
      "authors": [
        "AV1 RTC SG"
      ],
      "status": "April 8, 2020",
      "publisher": "Alliance for Open Media"
    },
    "FRAME-MARKING": {
      "title": "Frame Marking RTP Header Extension",
      "href": "https://tools.ietf.org/html/draft-ietf-avtext-framemarking",
      "authors": [
        "M. Zanaty",
        "E. Berger",
        "S. Nandakumar"
      ],
      "status": "21 November 2019",
      "publisher": "IETF"
    },
   "VP9": {
      "title": "VP9 Bitstream & Decoding Process Specification",
      "href": "https://storage.googleapis.com/downloads.webmproject.org/docs/vp9/vp9-bitstream-specification-v0.6-20160331-draft.pdf",
      "authors": [
        "A. Grange",
        "P. de Rivaz",
        "J. Hunt"
      ],
      "status": "February 2016. Version 0.6",
      "publisher": "Google"
    },
    "VP9-PAYLOAD": {
      "title": "RTP Payload Format for VP9 Video",
      "href": "https://tools.ietf.org/html/draft-ietf-payload-vp9",
      "authors": [
        "J. Uberti",
        "S. Holmer",
        "M. Flodman",
        "J. Lennox",
        "D. Hong"
      ],
      "status": "24 July 2019. Internet Draft (work in progress)",
      "publisher": "IETF"
    }
  }
}
