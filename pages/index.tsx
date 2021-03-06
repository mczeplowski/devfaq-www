import React from 'react';
import { GetInitialPropsContext } from '../utils/types';
import { redirect } from '../utils/redirect';

export default class Index extends React.Component {
  static async getInitialProps(ctx: GetInitialPropsContext) {
    return redirect('/questions/[technology]', { technology: 'js', page: '1' }, ctx);
  }

  render() {
    return null;
  }
}
