# setup-winsdk

[![ci][1]][2]

This action downloads and installs a specific version of the Windows 10 SDK.

## Inputs

### Optional

#### `winsdk-build-version`

The 5-digit "build" version of the SDK "10.0.xxxxx.0" to install. Examples:
17763, 18362, 19041. Default `18362`.

## Example usage

```yaml
steps:
- uses: actions/checkout@v2
- uses: fbactions/setup-winsdk@v1
  with:
    winsdk-build-version: 19041
```

## License

The scripts and documentation in this project are released under the [MIT License](LICENSE)

[1]: https://github.com/fbactions/setup-winsdk/workflows/ci/badge.svg
[2]: https://github.com/fbactions/setup-winsdk/actions
