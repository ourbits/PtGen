# PtGen Archive

The static export of the PtGen Database.

If you want to use all archive for other purposes, We recommend you use `Download ZIP` feature or `git clone` command to Download It.

**All data comes from the Internet and is for learning purposes only!**

## Update Status

- Last update at: `2025-10-12 23:01:39` (CET, UTC+01:00)
- Last data summary:

| Source Site | Count |
|:----:|----:|
| douban | 444053 |
| douban_celebrity | 421911 |
| imdb | 314000 |
| bangumi | 8522 |
| steam | 1417 |
| indienova | 150 |
| epic | 13 |

- Report: [Monthly Create](/internal_status/monthly_create.csv) , [Daily Update](/internal_status/daily_update.csv)

## Usage

1. You can use this repo by access the following link:

    | Provider | Status | Link Format | Note |
    | :----: | :----: | :---- | :---- |
    | Github Pages | [![Github Pages](https://github.com/ourbits/PtGen/actions/workflows/pages/pages-build-deployment/badge.svg)](https://ourbits.github.io/PtGen/) | `https://ourbits.github.io/PtGen/<site>/<sid>.json` | Static |
    | Ourhelp CDN | [![Ourhelp CDN](https://img.shields.io/website?url=https%3A%2F%2Fcdn.ourhelp.club%2Fptgen%2FREADME.md)](https://cdn.ourhelp.club/ptgen/) | `https://cdn.ourhelp.club/ptgen/<site>/<sid>.json` | Static, Selfhosted |
    | Ourhelp API | [![Ourhelp API](https://img.shields.io/website?url=https%3A%2F%2Fapi.ourhelp.club%2Finfogen)](https://api.ourhelp.club/infogen) | `https://api.ourhelp.club/infogen?site=<site>&sid=<sid>` | Dynamic, CORS, Ratelimit |
    | ~~Vercel~~ | [![Vercel](https://img.shields.io/badge/Build-Out_Dated-red)](https://pt-gen.vercel.app/) | `https://pt-gen.vercel.app/<site>/<sid>.json` | Static |
    | ~~Netlify~~ | [![Netlify Status](https://img.shields.io/badge/Build-Out_Dated-red)](https://pt-gen.netlify.app/) | `https://pt-gen.netlify.app/<site>/<sid>.json` | Static |
   
   - Build Workflow: **`Ourhelp API`** -> static export -> **`Ourhelp CDN`** -> git push -> **`Github Pages`** -> sync -> **`Vercel, Netlify`**

2. The `site` and `sid` items in **`Link Format`** follow the description in the table below: 

   | Site | Link Regexp | Note |
   |:---:|:----|:-----|
   | douban | `(https?://)?((movie\|www)\.)?douban\.com/(subject\|movie)/(?P<sid>\d+)/?` | |
   | douban_celebrity | `(https?://)?movie\.douban\.com/celebrity/(?P<sid>\d+)/?` | |
   | douban_personage | `(https?://)?www\.douban\.com/personage/(?P<sid>\d+)/?` | **Ourhelp API Only** |
   | imdb | `(https?://)?www\.imdb\.com/title/(?P<sid>tt\d+)` | |
   | bangumi | `(https?://)?(bgm\.tv\|bangumi\.tv\|chii\.in)/subject/(?P<sid>\d+)/?` | |
   | steam | `(https?://)?(store\.)?steam(powered\|community)\.com/app/(?P<sid>\d+)/?` | |
   | indienova | `(https?://)?indienova\.com/game/(?P<sid>\S+)` | |
   | epic | `(https?://)?www\.epicgames\.com/store/[a-zA-Z-]+/product/(?P<sid>\S+)/\S?` | |

   - For `douban_personage`, **Ourhelp API** only supports which created from `douban_celebrity` and cached in database.

3. The exported JSON format content is basically the same as that provided by the **Ourhelp API** ([documentation](https://github.com/Rhilip/PT-help/tree/master/modules/infogen)).
   - The fields such as `success, error, copyright, version, format` are not provided in the exported file.
   - The value format of some fields may vary in the export, This is mainly due to the update of PtGen Scrape and outdated crawling cache.
4. If there is no corresponding site data in current static export, you may try to access the **Ourhelp API** as fallback to auto-generate it.
5. Additional internal maps are provided only in `internal_map` folder.
   - [douban_celebrity_map.json](/internal_map/douban_celebrity_map.json) for `douban_celebrity <-> douban_personage <-> imdb_id`
    ```json5
    [
      {
        "cid": 1000167,                        // for link: https://movie.douban.com/celebrity/{cid}/
        "pid": 27205857,                       // for link: https://www.douban.com/personage/{pid}/
        "imdb_id": "nm0781238",                // for link: https://www.imdb.com/name/{imdb_id}/
        "name": "艾米·塞德丽丝 Amy Sedaris"    // quick note of 'name' for this map
      },
    ]
    ```
    
    - [douban_imdb_map.json](/internal_map/douban_imdb_map.json) for `douban_id <-> imdb_id`
    ```json5
    [
      {
        "dbid": 10000796,                     // for link: https://movie.douban.com/subject/{dbid}/
        "imdbid": "tt1247209",                // for link: https://www.imdb.com/title/{imdbid}/
        "name": "Hola?",                      // quick note of 'name' for this map
        "year": "2008"                        // quick note of 'year' for this map
      },
    ]
    ```

## Other Recommendations

- [bangumi/Archive](https://github.com/bangumi/Archive): Bangumi Wiki Archive
- [Rocket-Factory/MovieJSON](https://github.com/Rocket-Factory/MovieJSON): Douban JSON for Movie, MovieExtra, MovieRank, Celebrity
- [bangumi-data/bangumi-data](https://github.com/bangumi-data/bangumi-data): Raw data for Japanese Anime
- [manami-project/anime-offline-database](https://github.com/manami-project/anime-offline-database): A JSON based anime dataset containing the most important meta data as well as cross references to various anime sites such as MAL, ANIDB, ANILIST, KITSU and more...
- [bimzcy/rank4douban](https://github.com/bimzcy/rank4douban): CC, MOC, FIB, all kinds of billboard that connect the item title with douban ID.