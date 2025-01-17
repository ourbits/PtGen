# PtGen Archive

[![pages-build-deployment](https://github.com/ourbits/PtGen/actions/workflows/pages/pages-build-deployment/badge.svg)](https://github.com/ourbits/PtGen/actions/workflows/pages/pages-build-deployment)

The static export of the PtGen Database.

If you want to use all archive for other purposes, We recommend you use `Download ZIP` feature or `git clone` command to Download It.

**All data comes from the Internet and is for learning purposes only!**

## Update Status

- Last update at: `2025-01-17 03:00:17` (CET, UTC+01:00)
- Last data summary:

| Source Site | Count |
|:----:|----:|
| douban | 71045 |
| douban_celebrity | 1127 |
| imdb | 28669 |
| bangumi | 2200 |
| steam | 1417 |
| indienova | 150 |
| epic | 13 |

## Usage

1. This repo enable Github Pages feature, so you can directly access the following link to use it online: `https://ourbits.github.io/PtGen/<site>/<id>.json`
2. The exported JSON format content is basically the same as that provided by the Online API ([documentation](https://github.com/Rhilip/PT-help/tree/master/modules/infogen)), but without the following fields: `success, error, copyright, version, format`
3. Additional internal maps are provided in `internal_map` folder.
	- Douban Celebrity to Personage Map ([douban_celebrity_map.json](/internal_map/douban_celebrity_map.json)) 
	  ```json5
	  [
	    {
		   "cid": 1000167,                          // id in link: https://movie.douban.com/celebrity/{cid}/
		   "pid": 27205857,                         // id in link: https://www.douban.com/personage/{pid}/
		   "name": "艾米·塞德丽丝 Amy Sedaris"      // quick note of 'name' for this map
		},
	  ]
	  ```
    
    - DoubanId to IMDbId Map ([douban_imdb_map.json](/internal_map/douban_imdb_map.json))	
	  ```json5
	  [
	    {
		   "dbid": 10000796,                         // id in link: https://movie.douban.com/subject/{dbid}/
		   "imdbid": "tt1247209",                    // id in link: https://www.imdb.com/title/{imdbid}/
		   "name": "Hola?",                          // quick note of 'name' for this map
		   "year": "2008"                            // quick note of 'year' for this map
	    },
	  ]
	  ```

## Other Recommendations

- [bangumi/Archive](https://github.com/bangumi/Archive): (Offical) Bangumi Wiki Archive 
- [Rocket-Factory/MovieJSON](https://github.com/Rocket-Factory/MovieJSON): (Unoffical) Douban JSON for Movie, MovieExtra, MovieRank, Celebrity: 
- [bimzcy/rank4douban](https://github.com/bimzcy/rank4douban): (3rd party) CC, MOC, FIB, all kinds of billboard that connect the item title with douban ID.