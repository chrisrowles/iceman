# Tarkov Discord Bot

Built with love for Hand Eye Incorporated.

The codebase is split into two parts:

- bot: The discord bot
- server: API and data storage


## Setup

1. Clone the repository
2. Copy `.env.example` to `.env` and fill out environment variables (ask Chris for mongo credentials and bits)
2. Install dependencies with NPM
    ```
    npm install
    ```
3. Start watching files
    ```
    npm run watch
    ```
4. To run the api server:
    ```
    npm run serve:api
    ```
5. To run the bot:
    ```
    npm run serve:bot
    ```

## Example Bot command:

![image](https://i.imgur.com/TTvqIul.png)

## Example API Request:

Command:

```
curl --location --request GET 'http://localhost:3000/api/ammo/search?name=FMJ'
```

Response:

```
[
    {
        "_id": "63c26e950f534447bdfeac15",
        "Damage": "60",
        "Penetration Power": "30",
        "Armor Damage %": "36",
        "Accuracy %": "",
        "Recoil": "",
        "Fragmentation Chance": "30%",
        "Ricochet Chance": "30%",
        "Light Bleeding Chance %": "",
        "Heavy Bleeding Chance %": "",
        "Projectile Speed (m/s)": "605",
        "Special Effects": "",
        "Obtainable by": "Skier LL2",
        "Icon": "",
        "Name": ".300 Blackout BCP FMJ"
    },
    {
        "_id": "63c26e950f534447bdfeac2c",
        "Damage": "56",
        "Penetration Power": "21",
        "Armor Damage %": "30",
        "Accuracy %": "",
        "Recoil": "",
        "Fragmentation Chance": "25%",
        "Ricochet Chance": "26%",
        "Light Bleeding Chance %": "",
        "Heavy Bleeding Chance %": "",
        "Projectile Speed (m/s)": "884",
        "Special Effects": "",
        "Obtainable by": "Jaeger LL1",
        "Icon": "",
        "Name": "5.45x39mm FMJ"
    },
    {
        "_id": "63c26e950f534447bdfeac42",
        "Damage": "98",
        "Penetration Power": "23",
        "Armor Damage %": "48",
        "Accuracy %": "",
        "Recoil": "+10",
        "Fragmentation Chance": "25%",
        "Ricochet Chance": "6.5%",
        "Light Bleeding Chance %": "+20",
        "Heavy Bleeding Chance %": "+25",
        "Projectile Speed (m/s)": "580",
        "Special Effects": "",
        "Obtainable by": "Skier LL1\nJaeger LL1",
        "Icon": "",
        "Name": ".366 TKM FMJ"
    },
    {
        "_id": "63c26e950f534447bdfeac1d",
        "Damage": "54",
        "Penetration Power": "23",
        "Armor Damage %": "33",
        "Accuracy %": "+10",
        "Recoil": "-5",
        "Fragmentation Chance": "50%",
        "Ricochet Chance": "26%",
        "Light Bleeding Chance %": "",
        "Heavy Bleeding Chance %": "",
        "Projectile Speed (m/s)": "957",
        "Special Effects": "",
        "Obtainable by": "Skier LL1Peacekeeper LL1",
        "Icon": "",
        "Name": "5.56x45mm FMJ"
    },
    {
        "_id": "63c26e950f534447bdfeac1a",
        "Damage": "122",
        "Penetration Power": "47",
        "Armor Damage %": "83",
        "Accuracy %": "",
        "Recoil": "",
        "Fragmentation Chance": "20%",
        "Ricochet Chance": "40%",
        "Light Bleeding Chance %": "+35",
        "Heavy Bleeding Chance %": "+50",
        "Projectile Speed (m/s)": "900",
        "Special Effects": "",
        "Obtainable by": "Peacekeeper LL4",
        "Icon": "",
        "Name": ".338 Lapua Magnum FMJ"
    },
    {
        "_id": "63c26e950f534447bdfeac49",
        "Damage": "88",
        "Penetration Power": "31",
        "Armor Damage %": "33",
        "Accuracy %": "",
        "Recoil": "-3",
        "Fragmentation Chance": "25%",
        "Ricochet Chance": "20%",
        "Light Bleeding Chance %": "+20",
        "Heavy Bleeding Chance %": "+20",
        "Projectile Speed (m/s)": "840",
        "Special Effects": "",
        "Obtainable by": "Skier LL2Jaeger LL2",
        "Icon": "",
        "Name": "7.62x51mm BCP FMJ"
    }
]
```