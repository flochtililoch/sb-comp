# sb-comp

This repo reproduces issue faced while trying to render a Stories from Storybook references (a.k.a. "composed Storybook", see here) in a MDX file, using the `<Story />` component with `id`` param.

## Setup

```sh
git clone git@github.com:flochtililoch/sb-comp.git
cd sb-comp
yarn
```

## Run all 3 instances of SB (as separate processes)

Goal is to have 3 instances, running on:

- localhost:6006
- localhost:6007
- localhost:6008

```sh
yes | yarn storybook &
yes | yarn storybook &
yes | yarn storybook &
```

## Issue

In the first SB instance, open "Stories > Foo", observe:

[issue](./issue.png)

in src/stories/Foo.mdx, comment out lines 11-22, observe:

Main stories are correctly rendered.
