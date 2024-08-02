console.info("Loading startup_scripts/max_stack_sizes.js");

ItemEvents.modification(evt => {
    //evt.modify('minecraft:cobblestone', item => {
    //    item.maxStackSize = 128;
    //});
    evt.modify('minecraft:ender_pearl', item => {
        item.maxStackSize = 64;
    });
});
