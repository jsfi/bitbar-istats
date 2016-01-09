# bitbar-istats

## Requirements

Install [iStats](https://github.com/Chris911/iStats)
```shell
gem install iStats
```

Enable CPU-Cores
```shell
istats scan

...
TC1C Core 1  74.0°C  ▁▂▃▅▆▇
TC2C Core 2  72.0°C  ▁▂▃▅▆▇
TC3C Core 3  66.0°C  ▁▂▃▅▆▇
TC4C Core 4  61.0°C  ▁▂▃▅▆▇
...

istats enable TC1C
istats enable TC2C
istats enable TC3C
istats enable TC4C
```

## TODO

Currently not working with RVM
