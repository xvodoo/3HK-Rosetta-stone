# 3HK Rosetta stone
This repository contains an extension for the 3HK Rosetta Stone project. The extension is designed to collaborate with users by providing additional functionality, improving accessibility, and supporting the increase of working hours for students. It aims to enhance the overall user experience while maintaining an efficient and seamless interaction with the Rosetta Stone platform.

Install
Chrome based browsers

    Using github release

To use the extension in a chrome-based browser, you need to:

    download the file 3HK-Rosetta-stone.tar.gz from the latest release on your machine.
    create a folder named rosettastonks somewhere on your machine to store the extension
    run the following command in the rosettastonks folder.

$ tar xvzf /path/to/3HK-Rosetta-stone.tar.gz

    Using nix package manager

Instead of the previous commands, if you are on a nix system supporting flakes, you can run the following commands, which will install a folder under the path /tmp/rosettastonks with all the files.

$ nix build --out-link "/tmp/rosettastonks" github:m1dugh/RosettaStonks#chrome

The folder is now installed under /tmp/rosettastonks/

This part if for all users indepently of whether you are using github method or nix method.

In your browser:

    go to chrome://extensions
    check the Developer mode toggle
    click Load unpacked
    Select your rosettastonks folder
How to use
Adding time
Adding time in Foundations

To add time on foundations product, you need to go to your exercises, and click ignore or resolve one question at least. Once this is done, a time field should appear on the extension page on which you can add your time.
Adding time in Fluency builder

To add time on fluency builder product, you need to go to your exercises, and answer at least one exercise. If the add time field does not appear, it means that no time request was caught, you need to refresh the question and answer it once again. To have the time added, you need to finish the lesson you used to add time.

Note: If you don't see the add time field, it means that the actions you took on Rosetta stone website did not lead to adding legitimate time, and therefore, you need to answer other questions.
