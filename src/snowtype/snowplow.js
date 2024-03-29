// Automatically generated by Snowtype


/**
 * Typedef for a DeviceTimestamp
 * @typedef {object} DeviceTimestamp
 * @property {string} type The value of 'dtm'
 * @property {number} value The value of the device timestamp
 */

/**
 * Typedef for a TrueTimestamp
 * @typedef {object} TrueTimestamp
 * @property {string} type The value of 'ttm'
 * @property {number} value The value of the true timestamp
 */

/**
 * Typedef for a Timestamp
 * @typedef {object} Timestamp
 * @property {number|TrueTimestamp|DeviceTimestamp} [timestamp] The value of the timestamp
 */

/**
 * Typedef for a SelfDescribingJson
 * @typedef {object} SelfDescribingJson
 * @property {string} schema The schema of the context
 * @property {object} data The data to send for the context
 */

/**
 * Typedef for a Context
 * @typedef {object} Context
 * @property {SelfDescribingJson[]} [context] Contexts to include in the event
 */


/**
 * Schema for an Ecommerce action
 * @typedef {object} SnowplowEcommerceAction
 * @property {"add_to_cart"|"remove_from_cart"|"product_view"|"list_click"|"list_view"|"promo_click"|"promo_view"|"checkout_step"|"transaction"|"refund"|"trns_error"} type Standard ecommerce actions.
 * @property {?string} [name] The name of the list presented to the user E.g. product list, search results, shop the look, frequently bought with.
 */

/**
 * Schema for representing subscription events on a news website
 * @typedef {object} Subscription
 * @property {"free"|"basic"|"unlimited"} tier
 */


import { trackSelfDescribingEvent } from '@snowplow/browser-tracker';

/**
 * Track a Snowplow event for SnowplowEcommerceAction.
 * Schema for an Ecommerce action
 * @param { SnowplowEcommerceAction & Timestamp & Context } snowplowEcommerceAction - Attributes for SnowplowEcommerceAction.
 * @param {string[]} [trackers] - Tracker names to send the event to.
 */
export function trackSnowplowEcommerceAction(snowplowEcommerceAction, trackers){
    const { context, timestamp, ...data } = snowplowEcommerceAction;
    trackSelfDescribingEvent({
        event: {
            schema: 'iglu:com.snowplowanalytics.snowplow.ecommerce/snowplow_ecommerce_action/jsonschema/1-0-2',
            data
        },
        context,
        timestamp,
    }, trackers);
}

/**
 * Creates a Snowplow SnowplowEcommerceAction entity.
 * @param { SnowplowEcommerceAction } snowplowEcommerceAction - Attributes for SnowplowEcommerceAction.
 */
export function createSnowplowEcommerceAction(snowplowEcommerceAction){
    return {
        schema: 'iglu:com.snowplowanalytics.snowplow.ecommerce/snowplow_ecommerce_action/jsonschema/1-0-2',
        data: snowplowEcommerceAction
    }
}
/**
 * Track a Snowplow event for Subscription.
 * Schema for representing subscription events on a news website
 * @param { Subscription & Timestamp & Context } subscription - Attributes for Subscription.
 * @param {string[]} [trackers] - Tracker names to send the event to.
 */
export function trackSubscription(subscription, trackers){
    const { context, timestamp, ...data } = subscription;
    trackSelfDescribingEvent({
        event: {
            schema: 'iglu:com.snplow.sales.aws/subscription/jsonschema/1-0-0',
            data
        },
        context,
        timestamp,
    }, trackers);
}

/**
 * Creates a Snowplow Subscription entity.
 * @param { Subscription } subscription - Attributes for Subscription.
 */
export function createSubscription(subscription){
    return {
        schema: 'iglu:com.snplow.sales.aws/subscription/jsonschema/1-0-0',
        data: subscription
    }
}

/**
 * Typedef for a Subscription entity context.
 * @typedef {object} SubscriptionContext
 * @property {string} schema The schema of the context.
 * @property { Subscription } data The data to send for the context.
 */

/**
 * Typedef for PurchaseSubscription event specification contexts.
 * @typedef {object} SnowplowEcommerceActionContexts
 * @property {(SubscriptionContext)[]} [context] Contexts to include in the PurchaseSubscription event specification.
 */

/**
 * Tracks a PurchaseSubscription event specification.
 * ID: 80c2d9fc-a4b2-43eb-b830-ed1cc328ad03
 * @param { SnowplowEcommerceAction & Timestamp & SnowplowEcommerceActionContexts } purchaseSubscription - Attributes for PurchaseSubscription event specification.
 * @param {string[]} [trackers] - Tracker names to send the event specification to.
 */
export function trackPurchaseSubscription(purchaseSubscription, trackers){
    trackSnowplowEcommerceAction(purchaseSubscription, trackers);
}

