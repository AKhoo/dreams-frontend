import React from 'react';

export const NewLineBreak = '\r\n\r\n';

export const addLineBreaksToText = text => {
  if (text) {
    return text.split(NewLineBreak).map((str, key) => {
      return (
        <p key={key}>
          {str}
          <br />
        </p>
      );
    });
  }
};
