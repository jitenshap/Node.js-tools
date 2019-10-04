const { execSync } = require('child_process');
const Encoding = require('encoding-japanese');

const bufferToString = (bytes) => 
{
    return Encoding.convert(bytes, 
    {
        from: 'SJIS',
        to: 'UNICODE',
        type: 'string',
    });
};
  
var result = bufferToString(execSync('wmic logicaldisk get caption,freespace'));
result = result.substring(result.indexOf("\n") + 1);
var drives = result.split(/\r\r\n/);
var enableDrives = new Array(2);
drives.forEach(function(drive)
{
    var info = drive.split(":       ");
    if(info.length == 2)
    {
        info[1] = info[1].trim();
        enableDrives.push(info);
    }
});

console.log(enableDrives);