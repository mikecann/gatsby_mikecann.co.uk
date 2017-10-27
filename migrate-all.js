var shell = require('shelljs');

for(var i=1; i<54; i++)
{
    if (i==30)
        continue;

    migrate(i)
}

for(var i=1; i<10; i++)
{
    if (i==2)
        continue;

    migrate_part_30(i)
}

function migrate(num)
{
    if (shell.exec('hexo migrate wordpress migration/mikecanncouk.wordpress.2017-10-27_Part_'+pad(num, 3)+'_of_53.xml').code !== 0) {
        shell.echo('Error: Migrate failed');
        shell.exit(1);
    }
}

function migrate_part_30(num)
{
    if (shell.exec('hexo migrate wordpress "migration/part 30_Part_'+pad(num, 3)+'_of_10.xml"').code !== 0) {
        shell.echo('Error: Migrate failed');
        shell.exit(1);
    }
}

function pad(num, size) {
    var s = num+"";
    while (s.length < size) s = "0" + s;
    return s;
}