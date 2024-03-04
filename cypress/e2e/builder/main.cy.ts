import { Context, PermissionLevel } from '@graasp/sdk';

import {
  BUILDER_VIEW_CY,
  PLAYER_VIEW_CY,
  buildDataCy,
} from '../../../src/config/selectors';

describe('Builder View', () => {
  beforeEach(() => {
    cy.setUpApi(
      {},
      {
        context: Context.Builder,
        permission: PermissionLevel.Admin,
      },
    );
    cy.visit('/');
  });

  it('App', () => {
    cy.get(buildDataCy(BUILDER_VIEW_CY)).should('be.visible');
  });
});

describe('Builder View as Reader', () => {
  beforeEach(() => {
    cy.setUpApi(
      {},
      {
        context: Context.Builder,
        permission: PermissionLevel.Read,
      },
    );
    cy.visit('/');
  });

  it('App', () => {
    cy.get(buildDataCy(PLAYER_VIEW_CY)).should('be.visible');
  });
});
