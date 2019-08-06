import React from 'react';

export const NewLineBreak = '\r\n\r\n';

export const addLineBreaksToText = (text, readMoreWordCount, readMoreOnClick) => {
  if (text) {
    let output = text;
    if (readMoreWordCount) {
      output = text.split(" ").slice(0, readMoreWordCount).join(" ");
    };
    return output.split(NewLineBreak).map((str, key, arr) => {
      if ( key === arr.length - 1 && readMoreWordCount ) {
        return (
          <p key={key}>
            {str}...<span className="readMore" onClick={() => readMoreOnClick(true)}>(read more)</span>
            <br />
          </p>
        );
      } else {
        return (
          <p key={key}>
            {str}
            <br />
          </p>
        );
      }
    });
  }
};
