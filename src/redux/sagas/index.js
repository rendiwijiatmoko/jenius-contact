import {all} from 'redux-saga/effects';
import { Contacts } from './contacts';

const watchers = [
  ...Contacts
];

export default function* rootSaga() {
  yield all(watchers);
}
