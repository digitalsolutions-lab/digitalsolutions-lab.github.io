pgf.jsonp("object", {"@":"game","version":"0.25","hash":664286513,"title":"My Great Project","attributes":{"name":"default name","displaySize":{"width":414,"height":736},"actorTags":"collide","randomSeed":-1,"adReward":{"name":"","value":0},"playerType":1,"player1 Keymap":{"dpadUp":"","dpadDown":"","dpadLeft":"","dpadRight":"","buttonX":"","buttonY":"","buttonA":"","buttonB":"","start":"","select":"","leftShoulder1":"","rightShoulder1":"","leftShoulder2":"","rightShoulder2":"","leftStickClick":"","rightStickClick":""},"player2 Keymap":{"dpadUp":"","dpadDown":"","dpadLeft":"","dpadRight":"","buttonX":"","buttonY":"","buttonA":"","buttonB":"","start":"","select":"","leftShoulder1":"","rightShoulder1":"","leftShoulder2":"","rightShoulder2":"","leftStickClick":"","rightStickClick":""},"player3 Keymap":{"dpadUp":"","dpadDown":"","dpadLeft":"","dpadRight":"","buttonX":"","buttonY":"","buttonA":"","buttonB":"","start":"","select":"","leftShoulder1":"","rightShoulder1":"","leftShoulder2":"","rightShoulder2":"","leftStickClick":"","rightStickClick":""},"player4 Keymap":{"dpadUp":"","dpadDown":"","dpadLeft":"","dpadRight":"","buttonX":"","buttonY":"","buttonA":"","buttonB":"","start":"","select":"","leftShoulder1":"","rightShoulder1":"","leftShoulder2":"","rightShoulder2":"","leftStickClick":"","rightStickClick":""},"player5 Keymap":{"dpadUp":"","dpadDown":"","dpadLeft":"","dpadRight":"","buttonX":"","buttonY":"","buttonA":"","buttonB":"","start":"","select":"","leftShoulder1":"","rightShoulder1":"","leftShoulder2":"","rightShoulder2":"","leftStickClick":"","rightStickClick":""},"player6 Keymap":{"dpadUp":"","dpadDown":"","dpadLeft":"","dpadRight":"","buttonX":"","buttonY":"","buttonA":"","buttonB":"","start":"","select":"","leftShoulder1":"","rightShoulder1":"","leftShoulder2":"","rightShoulder2":"","leftStickClick":"","rightStickClick":""},"player7 Keymap":{"dpadUp":"","dpadDown":"","dpadLeft":"","dpadRight":"","buttonX":"","buttonY":"","buttonA":"","buttonB":"","start":"","select":"","leftShoulder1":"","rightShoulder1":"","leftShoulder2":"","rightShoulder2":"","leftStickClick":"","rightStickClick":""},"player8 Keymap":{"dpadUp":"","dpadDown":"","dpadLeft":"","dpadRight":"","buttonX":"","buttonY":"","buttonA":"","buttonB":"","start":"","select":"","leftShoulder1":"","rightShoulder1":"","leftShoulder2":"","rightShoulder2":"","leftStickClick":"","rightStickClick":""},"id884221":{"@":"real","name":"ballX","$":204},"id902576":{"@":"real","name":"ballY","$":166},"id689143":{"@":"boolean","name":"Active","$":false},"id809065":{"@":"real","name":"Power","$":0},"id193341":{"@":"integer","name":"HowManyshots","$":3},"id140730":{"@":"boolean","name":"switch","$":false},"id895351":{"@":"real","name":"Gravx","$":0},"id287748":{"@":"real","name":"GravY","$":0},"id309565":{"@":"real","name":"Grav2X","$":0},"id565680":{"@":"real","name":"Grav2Y","$":0},"id980785":{"@":"boolean","name":"reset level","$":false},"id433045":{"@":"integer","name":"level","$":1},"id796313":{"@":"integer","name":"HowManyTargets","$":5},"id756239":{"@":"boolean","name":"level complete","$":false},"id672673":{"@":"boolean","name":"use gravity","$":true},"id726445":{"@":"table","name":"PurchaseTable","$":"PurchaseTable"},"id151327":{"@":"integer","name":"bgBin","$":0},"id708762":{"@":"integer","name":"nbOfShots","$":4}},"resolution":"17","resolutionIndependence":"0","networkEnabled":"0","instructions":"Add game instructions here.","longDescription":"A tabula rasa, a blank slate on which one may create a masterpiece.","prototypes":[{"id":"id525619","hash":1637402103,"attributes":{"name":"bg","position":{"x":0,"y":0},"size":{"width":750,"height":1334},"rotation":0,"color":{"red":1,"green":1,"blue":1,"alpha":1},"image":"bg","tags":"","preloadArt":true},"aspects":{"graphics":{"attributes":{"visible":true,"tileWidth":750,"tileHeight":1334}},"physics":{"attributes":{"density":1,"friction":3,"restitution":1,"canSleep":true}}},"behaviors":[{"class":"TimerBehavior","attributes":{"runOnce":false,"runSequentially":false,"timerType":1,"interval":1,"runToCompletion":true},"behaviors":[{"class":"SpawnAction","attributes":{"prototypeKey":"id125822","direction":0,"directionSpace":1,"x":{"expression":{"keypath":"game.attributes.id884221"}},"y":{"expression":{"keypath":"game.attributes.id902576"}},"positionSpace":1,"layerOrder":2}},{"class":"SpawnAction","attributes":{"prototypeKey":"id304315","direction":0,"directionSpace":1,"x":{"expression":{"keypath":"game.attributes.id884221"}},"y":{"expression":{"keypath":"game.attributes.id902576"}},"positionSpace":1,"layerOrder":2}}]},{"class":"RuleBehavior","attributes":{"runOnce":false,"runSequentially":false},"conditions":{"attributes":{"conditionType":1,"subjectAttribute":"game.attributes.id151327"},"predicate":{"type":"number","attributes":{"operator":"=","RHS":1}}},"behaviors":{"class":"ChangeImageAction","attributes":{"image":"bg1"}}},{"class":"RuleBehavior","attributes":{"runOnce":false,"runSequentially":false},"conditions":{"attributes":{"conditionType":1,"subjectAttribute":"game.attributes.id151327"},"predicate":{"type":"number","attributes":{"operator":"=","RHS":2}}},"behaviors":{"class":"ChangeImageAction","attributes":{"image":"bg2"}}},{"class":"RuleBehavior","attributes":{"runOnce":false,"runSequentially":false},"conditions":{"attributes":{"conditionType":1,"subjectAttribute":"game.attributes.id151327"},"predicate":{"type":"number","attributes":{"operator":"=","RHS":3}}},"behaviors":{"class":"ChangeImageAction","attributes":{"image":"bg3"}}},{"class":"RuleBehavior","attributes":{"runOnce":false,"runSequentially":false},"conditions":{"attributes":{"conditionType":1,"subjectAttribute":"game.attributes.id708762"},"predicate":{"type":"number","attributes":{"operator":"=","RHS":0}}},"behaviors":{"class":"TimerBehavior","attributes":{"runOnce":false,"runSequentially":false,"timerType":1,"interval":2,"runToCompletion":false},"behaviors":{"class":"ChangeSceneAction","attributes":{"sceneKey":"id510473","enableAdvertisement":0,"index":1}}}}]},{"id":"id304315","hash":1916294033,"attributes":{"name":"directionind","position":{"x":0,"y":0},"size":{"width":150,"height":16},"rotation":0,"color":{"red":0.99999928474426,"green":0.99997442960739,"blue":0.99999129772186,"alpha":1},"image":"arrow","tags":"","preloadArt":true},"aspects":{"graphics":{"attributes":{"visible":true,"tileWidth":150,"tileHeight":16}},"physics":{"attributes":{"density":1,"friction":3,"restitution":1,"movable":true,"canSleep":true}}},"behaviors":{"class":"RuleBehavior","attributes":{"runOnce":false,"runSequentially":false},"conditions":{"attributes":{"conditionType":1,"subjectAttribute":"game.attributes.id689143"},"predicate":{"type":"boolean","attributes":{"RHS":1}}},"behaviors":[{"class":"ChangeAttributeAction","attributes":{"targetAttribute":"self.attributes.color.alpha","RHS":"1"}},{"class":"ConstrainAttributeBehavior","attributes":{"targetAttribute":"self.attributes.rotation","RHS":{"expression":["vectorToAngle(-",{"keypath":"game.attributes.id884221"},"+",{"keypath":"game.devices.mouse.position.x"},",-",{"keypath":"game.attributes.id902576"},"+",{"keypath":"game.devices.mouse.position.y"},")"]}}}],"elseBehaviors":{"class":"ChangeAttributeAction","attributes":{"targetAttribute":"self.attributes.color.alpha","RHS":"0"}}}},{"id":"id125822","hash":1388158869,"attributes":{"name":"powerind","position":{"x":0,"y":0},"size":{"width":80,"height":80},"rotation":0,"color":{"red":1,"green":1,"blue":1,"alpha":1},"image":"powerind","tags":"","preloadArt":true},"aspects":{"graphics":{"attributes":{"visible":true,"tileWidth":80,"tileHeight":80}},"physics":{"attributes":{"density":1,"friction":3,"restitution":1,"movable":true,"canSleep":true}}},"behaviors":{"class":"RuleBehavior","attributes":{"runOnce":false,"runSequentially":false},"conditions":{"attributes":{"conditionType":1,"subjectAttribute":"game.attributes.id689143"},"predicate":{"type":"boolean","attributes":{"RHS":1}}},"behaviors":[{"class":"ChangeAttributeAction","attributes":{"targetAttribute":"self.attributes.color.alpha","RHS":"0.2"}},{"class":"ConstrainAttributeBehavior","attributes":{"targetAttribute":"game.attributes.id809065","RHS":{"expression":["min(magnitude(",{"keypath":"game.attributes.id884221"},"-",{"keypath":"game.devices.mouse.position.x"},",",{"keypath":"game.attributes.id902576"},"-",{"keypath":"game.devices.mouse.position.y"},")*7,800)"]}}},{"class":"ConstrainAttributeBehavior","attributes":{"targetAttribute":"self.attributes.size.width","RHS":{"expression":["min(magnitude(",{"keypath":"game.attributes.id884221"},"-",{"keypath":"game.devices.mouse.position.x"},",",{"keypath":"game.attributes.id902576"},"-",{"keypath":"game.devices.mouse.position.y"},"),120)"]}}},{"class":"ConstrainAttributeBehavior","attributes":{"targetAttribute":"self.attributes.size.height","RHS":{"expression":["min(magnitude(",{"keypath":"game.attributes.id884221"},"-",{"keypath":"game.devices.mouse.position.x"},",",{"keypath":"game.attributes.id902576"},"-",{"keypath":"game.devices.mouse.position.y"},"),120)"]}}}],"elseBehaviors":{"class":"ChangeAttributeAction","attributes":{"targetAttribute":"self.attributes.color.alpha","RHS":"0"}}}},{"id":"id520147","hash":495981810,"attributes":{"name":"Ball","position":{"x":0,"y":0},"size":{"width":50,"height":50},"rotation":0,"color":{"red":1,"green":1,"blue":1,"alpha":1},"image":"paper","tags":"","preloadArt":false,"id503546":{"@":"boolean","name":"active","$":false},"id398904":{"@":"real","name":"Grav distance","$":0},"id389269":{"@":"real","name":"Grav 2 Distance","$":0},"id811394":{"@":"boolean","name":"touched","$":false}},"aspects":{"graphics":{"attributes":{"visible":true,"tileWidth":50,"tileHeight":50}},"physics":{"attributes":{"density":1,"friction":3,"restitution":0.5,"movable":true,"collisionShape":1,"canSleep":true}}},"behaviors":[{"class":"InterpolateBehavior","attributes":{"runToCompletion":true,"targetAttribute":"self.attributes.size.width","finalValue":50,"duration":0.3,"easing":0}},{"class":"InterpolateBehavior","attributes":{"runToCompletion":true,"targetAttribute":"self.attributes.size.height","finalValue":50,"duration":0.3,"easing":0}},{"class":"ChangeAttributeAction","attributes":{"targetAttribute":"game.attributes.id884221","RHS":{"expression":{"keypath":"self.attributes.position.x"}}}},{"class":"ChangeAttributeAction","attributes":{"targetAttribute":"game.attributes.id902576","RHS":{"expression":{"keypath":"self.attributes.position.y"}}}},{"class":"RuleBehavior","attributes":{"runOnce":false,"runSequentially":false},"conditions":{"attributes":{"conditionType":1,"subjectAttribute":"self.attributes.id503546"},"predicate":{"type":"boolean","attributes":{"RHS":1}}},"behaviors":[{"class":"AccelerateBehavior","attributes":{"direction":270,"space":1,"acceleration":600}},{"class":"SpawnAction","attributes":{"prototypeKey":"id520147","direction":0,"directionSpace":1,"x":{"expression":{"keypath":"game.attributes.id884221"}},"y":{"expression":{"keypath":"game.attributes.id902576"}},"positionSpace":1,"layerOrder":0}}]},{"class":"CollideBehavior","attributes":{"prototypeKey":"id619496","actorTag":"collide","mode":1}},{"class":"CollideBehavior","attributes":{"prototypeKey":"id848438","actorTag":"collide","mode":0}},{"class":"RuleBehavior","attributes":{"runOnce":false,"runSequentially":false},"conditions":{"attributes":{"conditionType":0},"predicate":{"type":"collision","attributes":{"prototypeKey":"id401302","actorTag":"collide","mode":0}}},"behaviors":{"class":"DestroyAction"}},{"class":"RuleBehavior","attributes":{"runOnce":false,"runSequentially":false,"compoundConditionKind":1},"conditions":[{"attributes":{"conditionType":0},"predicate":{"type":"collision","attributes":{"prototypeKey":"id944741","actorTag":"","mode":0}}},{"attributes":{"conditionType":0},"predicate":{"type":"collision","attributes":{"prototypeKey":"id863308","actorTag":"collide","mode":0}}},{"attributes":{"conditionType":0},"predicate":{"type":"collision","attributes":{"prototypeKey":"id458494","actorTag":"collide","mode":0}}},{"attributes":{"conditionType":0},"predicate":{"type":"collision","attributes":{"prototypeKey":"id316562","actorTag":"collide","mode":0}}}],"behaviors":{"class":"DestroyAction"}},{"class":"RuleBehavior","attributes":{"runOnce":false,"runSequentially":false},"conditions":[{"attributes":{"conditionType":0},"predicate":{"type":"mouse","mouseState":"down"}},{"attributes":{"conditionType":0},"predicate":{"type":"mousePosition","conditionType":"over actor"}},{"attributes":{"conditionType":1,"subjectAttribute":"game.attributes.id756239"},"predicate":{"type":"boolean","attributes":{"RHS":0}}},{"attributes":{"conditionType":1,"subjectAttribute":"game.attributes.id193341"},"predicate":{"type":"number","attributes":{"operator":">","RHS":0}}}],"behaviors":[{"class":"ChangeAttributeAction","attributes":{"targetAttribute":"game.attributes.id689143","RHS":"true"}},{"class":"ChangeAttributeAction","attributes":{"targetAttribute":"self.attributes.id811394","RHS":"true"}}]},{"class":"ChangeAttributeAction","attributes":{"targetAttribute":"game.attributes.id193341","RHS":{"expression":[{"keypath":"game.attributes.id193341"},"-1"]}}},{"class":"TimerBehavior","attributes":{"runOnce":false,"runSequentially":false,"timerType":1,"interval":1,"runToCompletion":false},"behaviors":{"class":"ChangeAttributeAction","attributes":{"targetAttribute":"game.attributes.id708762","RHS":{"expression":[{"keypath":"game.attributes.id708762"},"-1"]}}}},{"class":"RuleBehavior","attributes":{"runOnce":false,"runSequentially":false},"conditions":[{"attributes":{"conditionType":0},"predicate":{"type":"mouse","mouseState":"up"}},{"attributes":{"conditionType":1,"subjectAttribute":"self.attributes.id503546"},"predicate":{"type":"boolean","attributes":{"RHS":0}}},{"attributes":{"conditionType":1,"subjectAttribute":"self.attributes.id811394"},"predicate":{"type":"boolean","attributes":{"RHS":1}}},{"attributes":{"conditionType":1,"subjectAttribute":"game.attributes.id193341"},"predicate":{"type":"number","attributes":{"operator":">","RHS":0}}}],"behaviors":[{"class":"ChangeVelocityAction","attributes":{"direction":{"expression":["vectorToAngle(-",{"keypath":"self.attributes.position.x"},"+",{"keypath":"game.devices.mouse.position.x"},",-",{"keypath":"self.attributes.position.y"},"+",{"keypath":"game.devices.mouse.position.y"},")"]},"space":1,"speed":{"expression":{"keypath":"game.attributes.id809065"}}}},{"class":"ChangeAttributeAction","attributes":{"targetAttribute":"self.attributes.id503546","RHS":"true"}},{"class":"ChangeAttributeAction","attributes":{"targetAttribute":"game.attributes.id689143","RHS":"false"}}]},{"class":"RuleBehavior","attributes":{"runOnce":false,"runSequentially":false},"conditions":{"attributes":{"conditionType":1,"subjectAttribute":"self.attributes.id503546"},"predicate":{"type":"boolean","attributes":{"RHS":1}}},"behaviors":[{"class":"TimerBehavior","attributes":{"runOnce":false,"runSequentially":false,"timerType":1,"interval":6,"runToCompletion":true},"behaviors":{"class":"DestroyAction"}},{"class":"RuleBehavior","attributes":{"runOnce":false,"runSequentially":false},"conditions":{"attributes":{"conditionType":1,"subjectAttribute":"game.attributes.id672673"},"predicate":{"type":"boolean","attributes":{"RHS":1}}},"behaviors":[{"class":"ConstrainAttributeBehavior","attributes":{"targetAttribute":"self.attributes.id398904","RHS":{"expression":["magnitude(",{"keypath":"game.attributes.id895351"},"-",{"keypath":"self.attributes.position.x"},",",{"keypath":"game.attributes.id287748"},"-",{"keypath":"self.attributes.position.y"},")"]}}},{"class":"ConstrainAttributeBehavior","attributes":{"targetAttribute":"self.attributes.id389269","RHS":{"expression":["magnitude(",{"keypath":"game.attributes.id309565"},"-",{"keypath":"self.attributes.position.x"},",",{"keypath":"game.attributes.id565680"},"-",{"keypath":"self.attributes.position.y"},")"]}}},{"class":"RuleBehavior","attributes":{"runOnce":false,"runSequentially":false},"conditions":{"attributes":{"conditionType":1,"subjectAttribute":"self.attributes.id389269"},"predicate":{"type":"number","attributes":{"operator":"<","RHS":150}}},"behaviors":{"class":"AccelerateTowardBehavior","attributes":{"position":{"x":{"expression":{"keypath":"game.attributes.id309565"}},"y":{"expression":{"keypath":"game.attributes.id565680"}}},"space":1,"acceleration":1600}}},{"class":"RuleBehavior","attributes":{"runOnce":false,"runSequentially":false},"conditions":{"attributes":{"conditionType":1,"subjectAttribute":"self.attributes.id398904"},"predicate":{"type":"number","attributes":{"operator":"<","RHS":150}}},"behaviors":{"class":"AccelerateTowardBehavior","attributes":{"position":{"x":{"expression":{"keypath":"game.attributes.id895351"}},"y":{"expression":{"keypath":"game.attributes.id287748"}}},"space":1,"acceleration":1600}}}]}]},{"class":"RuleBehavior","attributes":{"runOnce":false,"runSequentially":false},"conditions":[{"attributes":{"conditionType":1,"subjectAttribute":"game.attributes.id980785"},"predicate":{"type":"boolean","attributes":{"RHS":1}}},{"attributes":{"conditionType":1,"subjectAttribute":"self.attributes.id503546"},"predicate":{"type":"boolean","attributes":{"RHS":1}}}],"behaviors":{"class":"DestroyAction"}}]},{"id":"id378367","hash":891839025,"attributes":{"name":"plank5","position":{"x":0,"y":0},"size":{"width":250,"height":10},"rotation":0,"color":{"red":1,"green":1,"blue":1,"alpha":0},"image":"","tags":"collide","preloadArt":true},"aspects":{"graphics":{"attributes":{"visible":true,"tileWidth":250,"tileHeight":10}},"physics":{"attributes":{"density":1,"friction":3,"canSleep":true}}},"behaviors":{"class":"RuleBehavior","attributes":{"runOnce":false,"runSequentially":false},"conditions":{"attributes":{"conditionType":1,"subjectAttribute":"game.attributes.id756239"},"predicate":{"type":"boolean","attributes":{"RHS":1}}},"behaviors":{"class":"ChangeAttributeAction","attributes":{"targetAttribute":"self.attributes.color.alpha","RHS":"0"}},"elseBehaviors":{"class":"ChangeAttributeAction","attributes":{"targetAttribute":"self.attributes.color.alpha","RHS":"1"}}}},{"id":"id144932","hash":1423303512,"attributes":{"name":"shots","position":{"x":0,"y":0},"size":{"width":100,"height":31},"rotation":0,"color":{"red":1,"green":1,"blue":1,"alpha":1},"image":"shots_","tags":"","preloadArt":true},"aspects":{"graphics":{"attributes":{"visible":true,"tileWidth":100,"tileHeight":31}},"physics":{"attributes":{"density":1,"friction":3,"restitution":1,"movable":true,"canSleep":true}}},"behaviors":[]},{"id":"id398495","hash":1907706319,"attributes":{"name":"Round Rules","position":{"x":0,"y":0},"size":{"width":100,"height":100},"rotation":0,"color":{"red":0,"green":1,"blue":0,"alpha":1},"image":"","tags":"","preloadArt":true},"aspects":{"graphics":{"attributes":{"visible":true,"tileWidth":100,"tileHeight":100}},"physics":{"attributes":{"density":1,"friction":3,"restitution":1,"canSleep":true}}},"behaviors":[{"class":"ChangeAttributeAction","attributes":{"targetAttribute":"game.attributes.id672673","RHS":"false"}},{"class":"ChangeAttributeAction","attributes":{"targetAttribute":"game.attributes.id433045","RHS":"1"}},{"class":"ChangeAttributeAction","attributes":{"targetAttribute":"game.attributes.id193341","RHS":"4"}},{"class":"ChangeAttributeAction","attributes":{"targetAttribute":"game.attributes.id796313","RHS":"5"}},{"class":"RuleBehavior","attributes":{"runOnce":false,"runSequentially":false},"conditions":{"attributes":{"conditionType":1,"subjectAttribute":"game.attributes.id980785"},"predicate":{"type":"boolean","attributes":{"RHS":1}}},"behaviors":[{"class":"ChangeAttributeAction","attributes":{"targetAttribute":"game.attributes.id796313","RHS":"5"}},{"class":"ChangeAttributeAction","attributes":{"targetAttribute":"game.attributes.id193341","RHS":"4"}},{"class":"TimerBehavior","attributes":{"runOnce":false,"runSequentially":false,"timerType":1,"interval":1,"runToCompletion":true},"behaviors":{"class":"ChangeAttributeAction","attributes":{"targetAttribute":"game.attributes.id980785","RHS":"false"}}}]},{"class":"RuleBehavior","attributes":{"runOnce":false,"runSequentially":false},"conditions":{"attributes":{"conditionType":1,"subjectAttribute":"game.attributes.id796313"},"predicate":{"type":"number","attributes":{"operator":"=","RHS":0}}},"behaviors":{"class":"TimerBehavior","attributes":{"runOnce":false,"runSequentially":false,"timerType":1,"interval":2,"runToCompletion":true},"behaviors":[{"class":"ChangeAttributeAction","attributes":{"targetAttribute":"game.attributes.id756239","RHS":"true"}},{"class":"SpawnAction","attributes":{"prototypeKey":"id280391","direction":0,"directionSpace":1,"x":240,"y":160,"positionSpace":1,"layerOrder":2}}]}}]},{"id":"id280391","hash":873582642,"attributes":{"name":"levelcomplete","position":{"x":0,"y":0},"size":{"width":480,"height":320},"rotation":0,"color":{"red":1,"green":1,"blue":1,"alpha":1},"image":"","tags":"","preloadArt":true},"aspects":{"graphics":{"attributes":{"visible":true,"tileWidth":480,"tileHeight":320}},"physics":{"attributes":{"density":1,"friction":3,"restitution":1,"movable":true,"canSleep":true}}},"behaviors":{"class":"RuleBehavior","attributes":{"runOnce":false,"runSequentially":false},"conditions":{"attributes":{"conditionType":0},"predicate":{"type":"touch","conditionType":"pressed"}},"behaviors":{"class":"TimerBehavior","attributes":{"runOnce":false,"runSequentially":false,"timerType":1,"interval":1,"runToCompletion":true},"behaviors":[{"class":"ChangeAttributeAction","attributes":{"targetAttribute":"game.attributes.id756239","RHS":"false"}},{"class":"ChangeSceneAction","attributes":{"sceneKey":"next","enableAdvertisement":1,"index":1}}]}}},{"id":"id289735","hash":1778890391,"attributes":{"name":"reset","position":{"x":0,"y":0},"size":{"width":22,"height":22},"rotation":0,"color":{"red":1,"green":1,"blue":1,"alpha":1},"image":"","tags":"","preloadArt":true},"aspects":{"graphics":{"attributes":{"visible":true,"tileWidth":22,"tileHeight":22}},"physics":{"attributes":{"density":1,"friction":3,"restitution":1,"movable":true,"canSleep":true}}},"behaviors":{"class":"RuleBehavior","attributes":{"runOnce":false,"runSequentially":false},"conditions":{"attributes":{"conditionType":0},"predicate":{"type":"touch","conditionType":"pressed"}},"behaviors":{"class":"ChangeAttributeAction","attributes":{"targetAttribute":"game.attributes.id980785","RHS":"true"}}}},{"id":"id848438","hash":1710830830,"attributes":{"name":"BinSides","position":{"x":0,"y":0},"size":{"width":100,"height":116},"rotation":0,"color":{"red":0.99999928474426,"green":0.99997442960739,"blue":0.99999129772186,"alpha":0},"image":"","tags":"","preloadArt":true},"aspects":{"graphics":{"attributes":{"visible":true,"tileWidth":100,"tileHeight":116}},"physics":{"attributes":{"density":1,"friction":3,"restitution":1,"canSleep":true}}},"behaviors":{"class":"RuleBehavior","attributes":{"runOnce":false,"runSequentially":false},"conditions":{"attributes":{"conditionType":1,"subjectAttribute":"game.attributes.id268359"}},"behaviors":{"class":"ChangeImageAction","attributes":{"image":"bin1"}}}},{"id":"id401302","hash":168277745,"attributes":{"name":"BinHole","position":{"x":0,"y":0},"size":{"width":100,"height":100},"rotation":0,"color":{"red":0.00011086463928223,"green":0.0017602443695068,"blue":0.99821841716766,"alpha":0},"image":"","tags":"","preloadArt":true},"aspects":{"graphics":{"attributes":{"visible":true,"tileWidth":100,"tileHeight":100}},"physics":{"attributes":{"density":1,"friction":3,"restitution":1,"movable":true,"canSleep":true}}},"behaviors":{"class":"RuleBehavior","attributes":{"runOnce":false,"runSequentially":false},"conditions":{"attributes":{"conditionType":0},"predicate":{"type":"collision","attributes":{"prototypeKey":"id520147","actorTag":"collide","mode":0}}},"behaviors":{"class":"ChangeAttributeAction","attributes":{"targetAttribute":"game.attributes.id151327","RHS":{"expression":[{"keypath":"game.attributes.id151327"},"+1"]}}}}},{"id":"id553299","hash":1036843376,"attributes":{"name":"intro","position":{"x":0,"y":0},"size":{"width":750,"height":1334},"rotation":0,"color":{"red":1,"green":1,"blue":1,"alpha":1},"image":"intro","tags":"","preloadArt":true},"aspects":{"graphics":{"attributes":{"visible":true,"tileWidth":750,"tileHeight":1334}},"physics":{"attributes":{"density":1,"friction":3,"restitution":1,"movable":true,"canSleep":true}}},"behaviors":[]},{"id":"id947987","hash":1391502029,"attributes":{"name":"instruction","position":{"x":0,"y":0},"size":{"width":750,"height":1334},"rotation":0,"color":{"red":1,"green":1,"blue":1,"alpha":1},"image":"instruction","tags":"","preloadArt":true},"aspects":{"graphics":{"attributes":{"visible":true,"tileWidth":750,"tileHeight":1334}},"physics":{"attributes":{"density":1,"friction":3,"restitution":1,"movable":true,"canSleep":true}}},"behaviors":[]},{"id":"id408138","hash":660714475,"attributes":{"name":"btnStart","position":{"x":0,"y":0},"size":{"width":100,"height":100},"rotation":0,"color":{"red":1,"green":1,"blue":1,"alpha":0},"image":"","tags":"","preloadArt":true},"aspects":{"graphics":{"attributes":{"visible":true}},"physics":{"attributes":{"density":1,"friction":3,"restitution":1,"movable":true,"canSleep":true}}},"behaviors":{"class":"RuleBehavior","attributes":{"runOnce":false,"runSequentially":false},"conditions":{"attributes":{"conditionType":0},"predicate":{"type":"touch","conditionType":"pressed"}},"behaviors":{"class":"ChangeSceneAction","attributes":{"sceneKey":"id269551","enableAdvertisement":0,"index":1}}}},{"id":"id701397","hash":655414698,"attributes":{"name":"btnPlay","position":{"x":0,"y":0},"size":{"width":100,"height":100},"rotation":0,"color":{"red":1,"green":1,"blue":1,"alpha":0},"image":"","tags":"","preloadArt":true},"aspects":{"graphics":{"attributes":{"visible":true}},"physics":{"attributes":{"density":1,"friction":3,"restitution":1,"movable":true,"canSleep":true}}},"behaviors":{"class":"RuleBehavior","attributes":{"runOnce":false,"runSequentially":false},"conditions":{"attributes":{"conditionType":0},"predicate":{"type":"touch","conditionType":"pressed"}},"behaviors":{"class":"ChangeSceneAction","attributes":{"sceneKey":"id738262","enableAdvertisement":0,"index":1}}}},{"id":"id775783","hash":1553688974,"attributes":{"name":"shots","position":{"x":0,"y":0},"size":{"width":21,"height":31},"rotation":0,"color":{"red":1,"green":1,"blue":1,"alpha":1},"image":"3","tags":"","preloadArt":true},"aspects":{"graphics":{"attributes":{"visible":true,"tileWidth":21,"tileHeight":31}},"physics":{"attributes":{"density":1,"friction":3,"restitution":1,"movable":true,"canSleep":true}}},"behaviors":[{"class":"RuleBehavior","attributes":{"runOnce":false,"runSequentially":false},"conditions":{"attributes":{"conditionType":1,"subjectAttribute":"game.attributes.id708762"},"predicate":{"type":"number","attributes":{"operator":"=","RHS":2}}},"behaviors":{"class":"ChangeImageAction","attributes":{"image":"2"}}},{"class":"RuleBehavior","attributes":{"runOnce":false,"runSequentially":false},"conditions":{"attributes":{"conditionType":1,"subjectAttribute":"game.attributes.id708762"},"predicate":{"type":"number","attributes":{"operator":"=","RHS":1}}},"behaviors":{"class":"ChangeImageAction","attributes":{"image":"1"}}},{"class":"RuleBehavior","attributes":{"runOnce":false,"runSequentially":false},"conditions":{"attributes":{"conditionType":1,"subjectAttribute":"game.attributes.id708762"},"predicate":{"type":"number","attributes":{"operator":"=","RHS":0}}},"behaviors":{"class":"ChangeImageAction","attributes":{"image":"0"}}}]},{"id":"id296581","hash":1458953680,"attributes":{"name":"finish","position":{"x":0,"y":0},"size":{"width":750,"height":1334},"rotation":0,"color":{"red":1,"green":1,"blue":1,"alpha":1},"image":"finish","tags":"","preloadArt":true},"aspects":{"graphics":{"attributes":{"visible":true,"tileWidth":750,"tileHeight":1334}},"physics":{"attributes":{"density":1,"friction":3,"restitution":1,"movable":true,"canSleep":true}}},"behaviors":[]},{"id":"id725829","hash":1517266198,"attributes":{"name":"score","position":{"x":0,"y":0},"size":{"width":21,"height":31},"rotation":0,"color":{"red":1,"green":1,"blue":1,"alpha":1},"image":"0","tags":"","preloadArt":true},"aspects":{"graphics":{"attributes":{"visible":true,"tileWidth":21,"tileHeight":31}},"physics":{"attributes":{"density":1,"friction":3,"restitution":1,"movable":true,"canSleep":true}}},"behaviors":[{"class":"RuleBehavior","attributes":{"runOnce":false,"runSequentially":false},"conditions":{"attributes":{"conditionType":1,"subjectAttribute":"game.attributes.id151327"},"predicate":{"type":"number","attributes":{"operator":"=","RHS":1}}},"behaviors":{"class":"ChangeImageAction","attributes":{"image":"1"}}},{"class":"RuleBehavior","attributes":{"runOnce":false,"runSequentially":false},"conditions":{"attributes":{"conditionType":1,"subjectAttribute":"game.attributes.id151327"},"predicate":{"type":"number","attributes":{"operator":"=","RHS":2}}},"behaviors":{"class":"ChangeImageAction","attributes":{"image":"2"}}},{"class":"RuleBehavior","attributes":{"runOnce":false,"runSequentially":false},"conditions":{"attributes":{"conditionType":1,"subjectAttribute":"game.attributes.id151327"},"predicate":{"type":"number","attributes":{"operator":"=","RHS":3}}},"behaviors":{"class":"ChangeImageAction","attributes":{"image":"3"}}}]},{"id":"id642875","hash":784318899,"attributes":{"name":"learn","position":{"x":0,"y":0},"size":{"width":750,"height":1334},"rotation":0,"color":{"red":1,"green":1,"blue":1,"alpha":1},"image":"learn","tags":"","preloadArt":true},"aspects":{"graphics":{"attributes":{"visible":true,"tileWidth":750,"tileHeight":1334}},"physics":{"attributes":{"density":1,"friction":3,"restitution":1,"movable":true,"canSleep":true}}},"behaviors":[]},{"id":"id767000","hash":557364937,"attributes":{"name":"btnShowMe","position":{"x":0,"y":0},"size":{"width":100,"height":100},"rotation":0,"color":{"red":1,"green":1,"blue":1,"alpha":0},"image":"","tags":"","preloadArt":true},"aspects":{"graphics":{"attributes":{"visible":true}},"physics":{"attributes":{"density":1,"friction":3,"restitution":1,"movable":true,"canSleep":true}}},"behaviors":{"class":"RuleBehavior","attributes":{"runOnce":false,"runSequentially":false},"conditions":{"attributes":{"conditionType":0},"predicate":{"type":"touch","conditionType":"pressed"}},"behaviors":{"class":"OpenURLAction","attributes":{"URL":"www.cmsservices.westpac.com.au/app/banking/deeplink?screenId=statementPreference&amp;profileType=PERSONAL","useExternalBrowser":true,"protocol":2}}}}],"scenes":[{"@":"scene","id":"id287067"},{"@":"scene","id":"id738262"},{"@":"scene","id":"id269551"},{"@":"scene","id":"id510473"},{"@":"scene","id":"id820672"}]});
