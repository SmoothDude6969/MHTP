const URL_MAP = {
  "||https://miniblox.io/textures/entity/chicken/chicken.png": "https://raw.githubusercontent.com/SmoothDude6969/MHTP/refs/heads/main/Entity/temperate_chicken.png",
  "||https://miniblox.io/textures/entity/cow/cow.png": "https://raw.githubusercontent.com/SmoothDude6969/MHTP/refs/heads/main/Entity/temperate_cow.png",
  "||https://miniblox.io/textures/entity/creeper/creeper.png": "https://raw.githubusercontent.com/SmoothDude6969/MHTP/refs/heads/main/Entity/creeper.png",
  "||https://miniblox.io/textures/entity/ghost/ghost.png": "https://raw.githubusercontent.com/SmoothDude6969/MHTP/refs/heads/main/Entity/ghast.png",
  "||https://miniblox.io/textures/entity/pig/pig.png": "https://raw.githubusercontent.com/SmoothDude6969/MHTP/refs/heads/main/Entity/temperate_pig.png",
  "||https://miniblox.io/textures/entity/sheep/sheep.png": "https://raw.githubusercontent.com/SmoothDude6969/MHTP/refs/heads/main/Entity/sheep.png",
  "||https://miniblox.io/textures/entity/sheep/sheep_fur.png": "https://raw.githubusercontent.com/SmoothDude6969/MHTP/refs/heads/main/Entity/sheep_wool.png",
  "||https://miniblox.io/textures/entity/skeleton/skeleton.png": "https://raw.githubusercontent.com/SmoothDude6969/MHTP/refs/heads/main/Entity/skeleton.png", 
  "||https://miniblox.io/textures/entity/slime/slime.png": "https://raw.githubusercontent.com/SmoothDude6969/MHTP/refs/heads/main/Entity/slime.png",
  "||https://miniblox.io/textures/entity/spider/spider.png": "https://raw.githubusercontent.com/SmoothDude6969/MHTP/refs/heads/main/Entity/spider.png",
  "||https://miniblox.io/textures/entity/zombie/zombie.png": "https://raw.githubusercontent.com/SmoothDude6969/MHTP/refs/heads/main/Entity/zombie.png"
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


