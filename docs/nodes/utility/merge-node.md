---
layout: layouts/docs.njk
title: Merge
eleventyNavigation:
  key: Merge
  parent: Utility
  order: 1
---

# Merge Node

**Category:** Utility  
**One-liner:** It's like a matchmaker for canvases, bringing two lonely drawings together.

## What Does It Do? 

The Merge node takes two canvas inputs and combines them into one beautiful canvas offspring. Think of it as the "copy-paste" operation's cooler cousin - it intelligently handles all the point indices and line connections so you don't have to worry about the technical details.

## Inputs and Outputs

- **Input 1:** First canvas (the base canvas)
- **Input 2:** Second canvas (the one we're adding)
- **Output:** One merged canvas to rule them all

## How It Works

1. Takes both input canvases
2. Copies all the points from both canvases
3. Smartly adjusts the line connections for the second canvas
4. Creates a new canvas sized to fit everything

## Example Use Cases

- Combining multiple sketches into one composition
- Building complex drawings from simpler parts
- Making your art teacher question their career choices

## Tips & Tricks

- The resulting canvas will be sized to accommodate both inputs
- The background color comes from the first input
- Points and lines maintain their original colors and properties

