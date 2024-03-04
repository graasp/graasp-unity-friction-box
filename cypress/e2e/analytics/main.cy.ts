import { Context, PermissionLevel } from '@graasp/sdk';

import {
  ANALYTICS_VIEW_CY,
  RELOAD_ANALYTICS_CY,
  buildDataCy,
} from '../../../src/config/selectors';

describe('Analytics View as Admin', () => {
  beforeEach(() => {
    cy.setUpApi(
      {},
      {
        context: Context.Analytics,
        permission: PermissionLevel.Admin,
      },
    );
    cy.visit('/');
  });

  it('App', () => {
    cy.get(buildDataCy(ANALYTICS_VIEW_CY)).should('be.visible');
    cy.get(buildDataCy(RELOAD_ANALYTICS_CY)).should('be.visible').click();
  });
});

describe('Analytics View as Reader', () => {
  beforeEach(() => {
    cy.setUpApi(
      {},
      {
        context: Context.Analytics,
        permission: PermissionLevel.Read,
      },
    );
    cy.visit('/');
  });

  it('App', () => {
    cy.get(buildDataCy(ANALYTICS_VIEW_CY)).should('be.visible');
    cy.get(buildDataCy(RELOAD_ANALYTICS_CY)).should('be.visible').click();
  });
});
