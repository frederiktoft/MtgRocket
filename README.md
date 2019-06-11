# MtgRocket
Magic The Gathering Gatherer integration for <a href="https://rocket.chat/">Rocket.Chat</a>.

## Overview 
With this integration, you can retrieve a card image from the trading card game Magic The Gathering, with a simple command.

## How to use
When installed, you can simply write `!card` followed by a card name, for example: `!card ulamog`. The plug-in will search for cards with that name, and display the first card from the search results.
<br />
![example1]
<br />
You can also search for exact card names, by putting the card name in quotation marks, for example: `!card "Opt"` will return the card "Opt".
<br />
![example2]
<br />
Then tap or click on the images to view a larger version. Easy!

## Installation

##### Configure outgoing Webhook in Rocket.Chat
In your Rocket.Chat instance go to administration panel and click on "Integrations". Click on "NEW INTEGRATION".<br />
Next, choose "Outgoing WebHook".
<br />
Now, on the webhook config screen, set the following values:
<br /><br />

##### Enabled
Set this value to true/yes
<br /><br />

##### Name (optional)
Enter the desired name for the integration (e.g. "MtgRocket").
<br /><br />

##### Channel
This is self-explaining. Insert the desired channel which should be listened.
<br /><br />

##### Trigger Words
Set the trigger word on which the command should be fired. Write `!card` here. You can technically write anything here, but then the script won't work.
<br /><br />

##### URLs
In this field you *must* instert `https://api.magicthegathering.io/v1/`. Very important!
<br /><br />

##### Script Enabled
This value must be true.
<br /><br />

##### Script
Now insert the complete contents of the file `MtgRocket.js` from the `src/` folder in this repo, into this field.
<br /><br />

#### Save changes
Now click on "SAVE CHANGES", simple as that.
<br /><br />

## Extras
There are other options you can modify to enhance this plug-in, like the sender if you have other bots active. This guide is just for a basic vanilla type setup. <br />
If you feel brave you can modify the source code to better suit your needs.

## Remarks
This plug-in makes use of the excellent unofficial <a href="https://magicthegathering.io/">magicthegathering.io</a> API. Source code is based on the <a href="https://github.com/FinndropStudios/GifRocket">GifRocket</a> plug-in.

## Development
There are room for several improvements, which I might get around doing eventually, like handling errors of the API is unreachable and so on. If you have suggestions or additions to the source code, feel free to contact me.
<br />
Since I developed this plugin, RocketChat has been updated with a package management system which would make installation much easier. Due to (when I first looked into it) poor documentation about this feature, and lack of time/interest, I will not likely update this plugin to use this functionality.

## Legal stuff
This is licensed under the MIT License. <br />
This plug-in is NOT endorsed, supported by, or affiliated with <a href="https://company.wizards.com/">Wizards Of The Coast</a>.

<!-- images -->
[example1]: img/Example1.JPG "Example 1"
[example2]: img/Example2.JPG "Example 2"
