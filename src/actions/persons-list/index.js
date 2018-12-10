import {
  FETCH_PERSONS_START,
  FETCH_PERSONS_SUCCESS,
  FETCH_PERSONS_ERROR,
} from "../../const/actions";

export const fetchPersonsList = () => {
  return {
    type: FETCH_PERSONS_START
  };
};

export const onPersonsListFetched = payload => {
  return {
    type: FETCH_PERSONS_SUCCESS,
    payload,
  };
};

export const onErrorPersonsListFetching = error => {
  return {
    type: FETCH_PERSONS_ERROR,
    error,
  };
};
