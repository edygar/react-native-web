import aphrodite from './src/aphrodite';
import cssModules from './src/css-modules';
import glamor from './src/glamor';
import jss from './src/jss';
import reactNative from './src/react-native';
import reactNativeStyleSheet from './src/react-native-stylesheet';
import styledComponents from './src/styled-components';
import xp from './src/reactxp';
import glamorous from './src/glamorous';

import renderDeepTree from './tests/renderDeepTree';
import renderTweet from './tests/renderTweet';
import renderWideTree from './tests/renderWideTree';

const testAll = window.location.search === '?all';

const coreTests = [
  () => renderTweet('react-native-web', reactNative),

  () => renderDeepTree('css-modules', cssModules),
  () => renderWideTree('css-modules', cssModules),
  () => renderDeepTree('react-native-web/stylesheet', reactNativeStyleSheet),
  () => renderWideTree('react-native-web/stylesheet', reactNativeStyleSheet),
  () => renderDeepTree('react-native-web', reactNative),
  () => renderWideTree('react-native-web', reactNative)
];

/**
 * Optionally run tests using other libraries
 */
const extraTests = [
  () => renderDeepTree('aphrodite', aphrodite),
  () => renderWideTree('aphrodite', aphrodite),
  () => renderDeepTree('glamor', glamor),
  () => renderWideTree('glamor', glamor),
  () => renderDeepTree('jss', jss),
  () => renderWideTree('jss', jss),
  () => renderDeepTree('reactxp', xp),
  () => renderWideTree('reactxp', xp),
  () => renderDeepTree('glamorous', glamorous),
  () => renderWideTree('glamorous', glamorous),
  () => renderDeepTree('styled-components', styledComponents),
  () => renderWideTree('styled-components', styledComponents)
];

const tests = testAll ? coreTests.concat(extraTests) : coreTests;

// run benchmarks
tests.reduce((promise, test) => promise.then(test()), Promise.resolve());
