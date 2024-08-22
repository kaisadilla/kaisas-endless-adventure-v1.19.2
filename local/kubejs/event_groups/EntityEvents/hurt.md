# EntityEvents.hurt

## Basic info

- Valid script types: [SERVER, CLIENT]

- Has result? ✔

- Event class: [LivingEntityHurtEventJS](https://github.com/KubeJS-Mods/KubeJS/tree/1902/common/src/main/java/dev/latvian/mods/kubejs/entity/LivingEntityHurtEventJS.java)

```
Invoked before an entity is hurt by a damage source.
```

### Available fields:

| Name | Type | Static? |
| ---- | ---- | ------- |

Note: Even if no fields are listed above, some methods are still available as fields through *beans*.

### Available methods:

| Name | Parameters | Return type | Static? |
| ---- | ---------- | ----------- | ------- |
| getDamage |  |  | float | ✘ |
| getEntity |  |  | LivingEntity | ✘ |
| getSource |  |  | DamageSource | ✘ |
| getLevel |  |  | Level | ✘ |
| getPlayer |  |  | Player | ✘ |
| getServer |  |  | MinecraftServer | ✘ |
| cancel | Object |  | Object | ✘ |
| cancel |  |  | Object | ✘ |
| exit |  |  | Object | ✘ |
| exit | Object |  | Object | ✘ |
| success | Object |  | Object | ✘ |
| success |  |  | Object | ✘ |


### Documented members:

- `float getDamage()`
```
The amount of damage.
```

- `LivingEntity getEntity()`
```
The entity that was hurt.
```

- `DamageSource getSource()`
```
The damage source.
```

- `Object cancel(Object var0)`

  Parameters:
  - var0: Object

```
Cancels the event with the given exit value. Execution will be stopped **immediately**.

`cancel` denotes a `false` outcome.
```

- `Object cancel()`
```
Cancels the event with default exit value. Execution will be stopped **immediately**.

`cancel` denotes a `false` outcome.
```

- `Object exit()`
```
Stops the event with default exit value. Execution will be stopped **immediately**.

`exit` denotes a `default` outcome.
```

- `Object exit(Object var0)`

  Parameters:
  - var0: Object

```
Stops the event with the given exit value. Execution will be stopped **immediately**.

`exit` denotes a `default` outcome.
```

- `Object success(Object var0)`

  Parameters:
  - var0: Object

```
Stops the event with the given exit value. Execution will be stopped **immediately**.

`success` denotes a `true` outcome.
```

- `Object success()`
```
Stops the event with default exit value. Execution will be stopped **immediately**.

`success` denotes a `true` outcome.
```



### Example script:

```js
EntityEvents.hurt(/* extra_id (optional), */ (event) => {
	// This space (un)intentionally left blank
});
```

