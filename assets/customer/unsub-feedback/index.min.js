(() => {
    "use strict";
    const reportV2 = collect => {
        window.HdSdk && window.HdSdk.shopTracker.collect(collect);
    };
    class UnsubFeedback {
        constructor() {
            reportV2({
                page: 122,
                module: -999,
                component: -999,
                action_type: 101,
                event_id: 1022
            });
        }
    }
    const unsub_feedback = UnsubFeedback;
    __SL_$__((function() {
        new unsub_feedback;
    }));
})();