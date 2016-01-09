#!/usr/bin/env /usr/local/bin/node

'use strict';

const exec = require('child_process').exec;

exec(`istats`, function(error, stdout, stderr) {
    if (error) {
        console.log(error);
    }

    if (stderr) {
        console.log(stderr);
    }

    if (error || stderr) {
        return;
    }

    let lines = stdout.split('\n');

    lines.filter(line => ~line.indexOf('CPU temp')).map(line => {
        logMatch(line, /\d+(\.\d+)°/);
    });

    console.log('---');

    lines.filter(line => line.match(/Fan \d+ speed/)).map(line => {
        logMatch(line, /Fan.*?RPM/);
    });

    lines.filter(line => line.match(/Core \d+ temp/)).map(line => {
        logMatch(line, /Core.*?°/);
    });
});

function logMatch(line, reg) {
    let match = line.match(reg);
    if (Array.isArray(match)) {
        console.log(match[0]);
    }
}
