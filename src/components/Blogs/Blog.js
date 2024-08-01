import React, { Component } from "react";
import DocumentMeta from "react-document-meta";

export default class Blog extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    const meta = {
      meta: {
        charset: "utf-8",
      },
    };

    return (
      <DocumentMeta {...meta}>
        <div className="container"></div>
      </DocumentMeta>
    );
  }
}
