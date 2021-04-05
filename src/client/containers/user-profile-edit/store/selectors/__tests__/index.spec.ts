import { userKey } from '@mobiera/containers/user-profile-edit/store/reducers';

import { selectUserState, selectStatus, selectMesasge } from '../index';

describe('selectAppLoader', () => {
  const mockParameters = {
    [userKey]: {
      message: 'fake',
      status: 'idle',
    },
  };

  it('should return the user state', () => {
    const state = selectUserState(mockParameters as any);
    expect(state).toEqual(mockParameters[userKey]);
  });

  it('should return the sattus state', () => {
    const selected = selectStatus.resultFunc(mockParameters[userKey] as any);
    expect(selected).toEqual(expect.any(String));
  });

  it('should return the message state', () => {
    const selected = selectMesasge.resultFunc(mockParameters[userKey] as any);
    expect(selected).toEqual(expect.any(String));
  });
});
