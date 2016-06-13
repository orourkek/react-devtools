/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @flow
 */
'use strict';

var React = require('react');

class DetailPane extends React.Component {

  render(): React.Element {
    return (
      <div style={styles.container}>
        <div style={styles.header}>
          <span style={styles.headerName}>
            {this.props.header}
          </span>
          <span style={styles.consoleHint}>{this.props.hint}</span>
        </div>
        {this.props.children}
      </div>
    );
  }
}

var styles = {
  container: {
    fontSize: '11px',
    // TODO figure out what font Chrome devtools uses on Windows
    fontFamily: 'Menlo, Consolas, monospace',
    overflow: 'auto',
    flex: 1,
    display: 'flex',
    flexDirection: 'column',

    cursor: 'default',
    WebkitUserSelect: 'none',
    MozUserSelect: 'none',
    userSelect: 'none',
  },
  header: {
    padding: 5,
    flexShrink: 0,
  },
  headerName: {
    flex: 1,
    fontSize: 16,
    color: 'rgb(242, 151, 102)',

    cursor: 'text',
    WebkitUserSelect: 'text',
    MozUserSelect: 'text',
    userSelect: 'text',
  },
  consoleHint: {
    float: 'right',
    fontSize: 11,
  },
};

module.exports = DetailPane;
