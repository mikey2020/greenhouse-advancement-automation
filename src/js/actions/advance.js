
export function advance(payload) {
  console.log('stuff can also happen here too');
  return dispatch => (
    console.log('send the stuff to the backend now')
  );
}
