const URL_MAP = {
 "||miniblox.*textures/entity/chicken/chicken.png": "https://raw.githubusercontent.com/SmoothDude6969/MHTP/refs/heads/main/Entity/temperate_chicken.png",
  "||miniblox.*textures/entity/cow/cow.png": "https://raw.githubusercontent.com/SmoothDude6969/MHTP/refs/heads/main/Entity/temperate_cow.png",
  "||miniblox.*textures/entity/creeper/creeper.png": "https://raw.githubusercontent.com/SmoothDude6969/MHTP/refs/heads/main/Entity/creeper.png",
  "||miniblox.*textures/entity/pig/pig.png": "https://raw.githubusercontent.com/SmoothDude6969/MHTP/refs/heads/main/Entity/temperate_pig.png", 
  "||miniblox.*textures/entity/sheep/sheep_fur.png": "https://raw.githubusercontent.com/SmoothDude6969/MHTP/refs/heads/main/Entity/sheep_wool.png",
  "||miniblox.*textures/entity/skeleton/skeleton.png": "https://raw.githubusercontent.com/SmoothDude6969/MHTP/refs/heads/main/Entity/skeleton.png",
  "||miniblox.*textures/entity/slime/slime.png": "https://raw.githubusercontent.com/SmoothDude6969/MHTP/refs/heads/main/Entity/slime.png",
  "||miniblox.*textures/entity/spider/spider.png": "https://raw.githubusercontent.com/SmoothDude6969/MHTP/refs/heads/main/Entity/spider.png",
  "||miniblox.*textures/entity/zombie/zombie.png": "https://raw.githubusercontent.com/SmoothDude6969/MHTP/refs/heads/main/Entity/zombie.png",
  "||miniblox.*textures/entity/ghost/ghost.png": "https://raw.githubusercontent.com/SmoothDude6969/MHTP/refs/heads/main/Entity/ghast.png",
  "||miniblox.*textures/entity/zombie_cowman/zombie_cowman.png": "https://raw.githubusercontent.com/SmoothDude6969/MHTP/refs/heads/main/Entity/zombified_piglin.png",
  "||miniblox.*textures/entity/snowman/snowman.png": "https://raw.githubusercontent.com/SmoothDude6969/MHTP/refs/heads/main/Entity/snow_golem.png",
};

let rules = [];
let idx = 1;

for (const [src, dst] of Object.entries(URL_MAP)) {
  rules.push({
    "id": idx++,
    "action": {
      "type": "redirect",
      "redirect": { "url": dst }
    },
    "condition": {
      "urlFilter": src,
      "resourceTypes": src.endsWith(".otf") ? ["font"] : ["image"]
    }
  });
}

chrome.declarativeNetRequest.updateDynamicRules(
  {
    addRules: rules,
    removeRuleIds: rules.map(rule => rule.id)
  },
  () => {
    if (chrome.runtime.lastError) {
      console.error("Error updating:", chrome.runtime.lastError);
    } else {
      console.log("Rules updated");
    }
  }
);



