import {feedTheDragons} from './magic.js';
import {start as startBot} from './bot/index.js';
import 'source-map-support/register';

feedTheDragons();

// eslint-disable-next-line @typescript-eslint/no-floating-promises
startBot();
