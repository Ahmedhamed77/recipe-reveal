export type NO_PARAMS = undefined;

export enum TabParams {
  MainStack = 'MainStack',
  FavoriteStack = 'FavoriteStack',
}
export type TabParamList = {
  [TabParams.MainStack]: NO_PARAMS;
  [TabParams.FavoriteStack]: NO_PARAMS;
};
