module.exports = {
    "packagerConfig": {
        "executableName": "xcloud",
        "icon": "assets/logo.ico"
    },
    "makers": [
        {
            "name": "@electron-forge/maker-squirrel",
            "config": {
                "name": "XCloud",
                "exe": "XCloud.exe"
            }
        },
        {
            "name": "@electron-forge/maker-zip",
            "platforms": [
                "darwin"
            ]
        },
        {
            "name": "electron-forge-maker-appimage",
            "config": {
                "options": {
                    "icon": "assets/logo.png",
                    "productName": "XCloud",
                    "genericName": "XCloud",
                    "categories": "Games",
                    "compression": "gzip"
                }
            }
        },
        {
            "name": "@electron-forge/maker-deb",
            "config": {}
        },
        {
            "name": "@electron-forge/maker-rpm",
            "config": {}
        }
    ],
    "publishers": [
        {
            "name": "@electron-forge/publisher-github",
            "config": {
                "repository": {
                    "owner": "AAGaming00",
                    "name": "xcloud-desktop"
                },
                "prerelease": false
            }
        }
    ]
}