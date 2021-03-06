import React from 'react';
import { StyleSheet, View } from 'react-native';

import { A, P, colors, darkColors } from '../common/styleguide';
import ContentContainer from '../components/ContentContainer';
import CustomAppearanceContext from '../context/CustomAppearanceContext';

export default function Footer() {
  return (
    <CustomAppearanceContext.Consumer>
      {context => (
        <View
          style={[
            styles.container,
            {
              borderTopColor: context.isDark ? darkColors.border : colors.gray2,
            },
          ]}>
          <ContentContainer>
            <P style={styles.footerText}>
              Missing a library?{' '}
              <A href="https://github.com/react-native-community/react-native-directory#how-do-i-add-a-library">
                Add it to the directory
              </A>.
            </P>
          </ContentContainer>
        </View>
      )}
    </CustomAppearanceContext.Consumer>
  );
}

let styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 24,
    paddingLeft: 20,
    marginBottom: 10,
    borderTopWidth: 1,
    marginTop: 10,
  },
  footerText: {
    textAlign: 'center',
    lineHeight: 22,
    fontSize: 13,
  },
});
