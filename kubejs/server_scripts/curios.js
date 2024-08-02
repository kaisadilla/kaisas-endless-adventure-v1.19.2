console.info("Loading server_scripts/curios.js");

const QUIVER_SLOT_ITEMS = [
    "supplementaries:quiver",
];

ServerEvents.tags('item', evt => {
    evt.add('curios:quiver', QUIVER_SLOT_ITEMS);
})

ServerEvents.tags('block', evt => {
    
})