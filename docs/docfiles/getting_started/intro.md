---
sidebar_position: 1
---

# Setting up ChunkCore
Open your Project Settings, navigate to Project > Packaging, then make sure that Use Pak File and Generate Chunks are both enabled.

## DefaultGame.ini
Edit your **Project\Config\DefaultGame.ini** file and add the following lines, making sure to customize them to fit your own needs:
The Plugin will try and download your .pak files from this location, in this example: **https://eeldev.com/MyGame**

```
[/Script/Plugins.ChunkDownloader]
+CdnBaseUrls=eeldev.com/MyGame
```