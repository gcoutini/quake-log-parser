# Quake Log Parser

### Description
- The Quake Log Parser is a tool designed to parse and analyze logs from Quake 3 Arena Server. It provides detailed insights into server activities, such as client connections, scores, match events and items used.

### Key Features
- <b>Log Parsing: </b> Extract match information as needed, in a friendly way.
- <b>Ranking Generator: </b> Find out the high-scoring players from the analyzed logs
- <b>Means of Death: </b> Extract data about players' deaths, such as weapons used or environmental event.

### Requirements

```
NodeJS (Version 18.18.0 or later)
```

### Getting Started

1. Clone the repository:

```
git clone git@github.com:gcoutini/quake-log-parser.git
```

2. Install dependencies:
```
cd quake-log-parser
npm install
```

3. Run the application:

```
npm run start
```

## Usage

After starting the application, you can access its doc:

```
http://localhost:3000/doc
```

It's possible to check available routes and try them out.

## Examples

<details>
  <summary>Quake 3 Match raw logs example</summary>
  <pre><code>
    1:47 InitGame: \sv_floodProtect\1\sv_maxPing\0\sv_minPing\0\sv_maxRate\10000\sv_minRate\0\sv_hostname\Code Miner Server\g_gametype\0\sv_privateClients\2\sv_maxclients\16\sv_allowDownload\0\bot_minplayers\0\dmflags\0\fraglimit\20\timelimit\15\g_maxGameClients\0\capturelimit\8\version\ioq3 1.36 linux-x86_64 Apr 12 2009\protocol\68\mapname\q3dm17\gamename\baseq3\g_needpass\0
  1:47 ClientConnect: 2
  1:47 ClientUserinfoChanged: 2 n\Dono da Bola\t\0\model\sarge\hmodel\sarge\g_redteam\\g_blueteam\\c1\4\c2\5\hc\95\w\0\l\0\tt\0\tl\0
  1:47 ClientBegin: 2
  1:47 ClientConnect: 3
  1:47 ClientUserinfoChanged: 3 n\Isgalamido\t\0\model\uriel/zael\hmodel\uriel/zael\g_redteam\\g_blueteam\\c1\5\c2\5\hc\100\w\0\l\0\tt\0\tl\0
  1:47 ClientBegin: 3
  1:47 ClientConnect: 4
  1:47 ClientUserinfoChanged: 4 n\Zeh\t\0\model\sarge/default\hmodel\sarge/default\g_redteam\\g_blueteam\\c1\1\c2\5\hc\100\w\0\l\0\tt\0\tl\0
  1:47 ClientBegin: 4
  1:48 Item: 4 ammo_rockets
  1:48 Item: 4 weapon_rocketlauncher
  1:51 Item: 3 item_armor_shard
  1:51 Item: 3 item_armor_shard
  1:51 Item: 3 item_armor_shard
  1:51 Item: 3 item_armor_combat
  1:54 Item: 3 weapon_rocketlauncher
  1:54 Item: 3 ammo_rockets
  1:57 Item: 2 weapon_rocketlauncher
  2:00 Kill: 1022 3 22: <world> killed Isgalamido by MOD_TRIGGER_HURT
  2:02 Item: 3 weapon_rocketlauncher
  2:04 Kill: 1022 2 19: <world> killed Dono da Bola by MOD_FALLING
  2:04 Item: 4 item_armor_body
  2:04 Kill: 1022 3 19: <world> killed Isgalamido by MOD_FALLING
  2:07 Item: 2 weapon_rocketlauncher
  2:11 Kill: 2 4 6: Dono da Bola killed Zeh by MOD_ROCKET
  2:14 Item: 3 weapon_railgun
  2:15 Item: 2 item_health_large
  2:16 Item: 4 weapon_rocketlauncher
  2:16 Item: 4 weapon_rocketlauncher
  2:17 Item: 3 weapon_railgun
  2:20 Item: 3 weapon_railgun
  2:22 Kill: 3 2 10: Isgalamido killed Dono da Bola by MOD_RAILGUN
  2:23 Item: 3 weapon_railgun
  2:24 Item: 4 weapon_rocketlauncher
  2:25 Item: 2 weapon_rocketlauncher
  2:27 Item: 4 item_armor_shard
  2:27 Item: 4 item_armor_shard
  2:27 Item: 4 item_armor_shard
  2:27 Item: 4 item_armor_combat
  2:29 Kill: 3 4 10: Isgalamido killed Zeh by MOD_RAILGUN
  2:32 Item: 3 item_quad
  2:33 Item: 4 ammo_shells
  2:33 Item: 4 weapon_shotgun
  2:37 Kill: 3 2 10: Isgalamido killed Dono da Bola by MOD_RAILGUN
  2:42 Item: 2 weapon_rocketlauncher
  2:43 Kill: 3 4 10: Isgalamido killed Zeh by MOD_RAILGUN
  2:45 Item: 3 weapon_rocketlauncher
  2:45 Item: 3 item_armor_body
  2:46 Item: 4 weapon_rocketlauncher
  2:46 Item: 2 weapon_railgun
  2:47 Item: 4 ammo_rockets
  2:55 Item: 4 weapon_railgun
  2:56 Item: 2 ammo_rockets
  2:56 Item: 2 weapon_rocketlauncher
  2:57 Kill: 3 4 10: Isgalamido killed Zeh by MOD_RAILGUN
  3:01 Item: 4 weapon_shotgun
  3:07 Item: 2 weapon_shotgun
  3:07 Item: 2 item_armor_shard
  3:07 Item: 2 item_armor_shard
  3:08 Item: 2 item_armor_shard
  3:08 Item: 2 item_armor_combat
  3:08 Item: 3 weapon_rocketlauncher
  3:12 Item: 3 item_health_large
  3:12 Kill: 2 4 6: Dono da Bola killed Zeh by MOD_ROCKET
  3:13 Kill: 3 2 6: Isgalamido killed Dono da Bola by MOD_ROCKET
  3:14 Item: 3 weapon_rocketlauncher
  3:16 Item: 4 weapon_rocketlauncher
  3:17 Item: 3 ammo_bullets
  3:19 Item: 2 weapon_rocketlauncher
  3:22 Item: 3 item_armor_shard
  3:22 Item: 3 item_armor_shard
  3:22 Item: 3 item_armor_shard
  3:25 Item: 4 weapon_rocketlauncher
  3:27 Kill: 1022 3 22: <world> killed Isgalamido by MOD_TRIGGER_HURT
  3:29 Kill: 4 2 6: Zeh killed Dono da Bola by MOD_ROCKET
  3:29 Item: 3 ammo_rockets
  3:30 Item: 3 weapon_rocketlauncher
  3:30 Item: 3 weapon_rocketlauncher
  3:32 Kill: 3 4 6: Isgalamido killed Zeh by MOD_ROCKET
  3:34 Item: 2 weapon_rocketlauncher
  3:37 Kill: 3 4 7: Isgalamido killed Zeh by MOD_ROCKET_SPLASH
  3:40 Item: 4 weapon_rocketlauncher
  3:41 Kill: 2 3 6: Dono da Bola killed Isgalamido by MOD_ROCKET
  3:44 Item: 2 ammo_rockets
  3:44 Item: 3 weapon_rocketlauncher
  3:45 Item: 4 item_armor_body
  3:46 Item: 2 weapon_rocketlauncher
  3:47 ClientConnect: 5
  3:47 ClientUserinfoChanged: 5 n\Assasinu Credi\t\0\model\sarge\hmodel\sarge\g_redteam\\g_blueteam\\c1\4\c2\5\hc\95\w\0\l\0\tt\0\tl\0
  3:47 Item: 2 item_health_large
  3:49 ClientUserinfoChanged: 5 n\Assasinu Credi\t\0\model\sarge\hmodel\sarge\g_redteam\\g_blueteam\\c1\4\c2\5\hc\100\w\0\l\0\tt\0\tl\0
  3:49 ClientBegin: 5
  3:51 Kill: 1022 2 19: <world> killed Dono da Bola by MOD_FALLING
  3:54 Item: 2 weapon_rocketlauncher
  3:56 Item: 4 item_armor_shard
  3:56 Item: 4 item_armor_shard
  3:56 Item: 4 item_armor_shard
  3:56 Item: 4 item_armor_combat
  3:59 Kill: 4 5 6: Zeh killed Assasinu Credi by MOD_ROCKET
  4:00 Kill: 4 2 6: Zeh killed Dono da Bola by MOD_ROCKET
  4:02 Item: 4 item_health_large
  4:03 Item: 2 weapon_rocketlauncher
  4:07 Item: 4 weapon_rocketlauncher
  4:08 Kill: 4 3 7: Zeh killed Isgalamido by MOD_ROCKET_SPLASH
  4:11 Item: 3 weapon_rocketlauncher
  4:11 Kill: 1022 5 19: <world> killed Assasinu Credi by MOD_FALLING
  4:15 Item: 5 weapon_rocketlauncher
  4:15 Item: 4 item_armor_shard
  4:15 Item: 4 item_armor_shard
  4:15 Item: 4 item_armor_shard
  4:16 Kill: 1022 3 22: <world> killed Isgalamido by MOD_TRIGGER_HURT
  4:17 Item: 5 item_armor_body
  4:19 Item: 5 ammo_rockets
  4:20 Item: 5 weapon_rocketlauncher
  4:20 Item: 3 weapon_rocketlauncher
  4:21 Kill: 4 2 7: Zeh killed Dono da Bola by MOD_ROCKET_SPLASH
  4:22 Kill: 3 4 7: Isgalamido killed Zeh by MOD_ROCKET_SPLASH
  4:23 Item: 3 item_armor_shard
  4:24 Item: 3 item_armor_shard
  4:24 Item: 3 item_armor_shard
  4:25 Item: 4 weapon_rocketlauncher
  4:28 Item: 2 weapon_rocketlauncher
  4:29 Item: 3 item_armor_combat
  4:33 Item: 2 ammo_bullets
  4:35 Item: 4 ammo_bullets
  4:35 Item: 3 item_quad
  4:37 Kill: 3 5 3: Isgalamido killed Assasinu Credi by MOD_MACHINEGUN
  4:40 Kill: 3 4 3: Isgalamido killed Zeh by MOD_MACHINEGUN
  4:41 Item: 5 weapon_rocketlauncher
  4:42 Item: 3 weapon_rocketlauncher
  4:44 Item: 4 weapon_rocketlauncher
  4:44 Item: 4 ammo_rockets
  4:45 Item: 2 item_armor_shard
  4:45 Item: 2 item_armor_shard
  4:45 Item: 2 item_armor_shard
  4:48 Kill: 2 3 6: Dono da Bola killed Isgalamido by MOD_ROCKET
  4:48 Item: 2 item_quad
  4:50 Item: 5 item_armor_shard
  4:50 Item: 5 item_armor_shard
  4:50 Item: 5 item_armor_shard
  4:51 Item: 4 weapon_rocketlauncher
  4:51 Item: 3 weapon_rocketlauncher
  4:51 Item: 2 weapon_rocketlauncher
  4:54 Kill: 2 2 7: Dono da Bola killed Dono da Bola by MOD_ROCKET_SPLASH
  4:56 Item: 4 item_quad
  4:56 Item: 4 weapon_rocketlauncher
  4:58 Item: 5 weapon_rocketlauncher
  4:58 Item: 2 weapon_rocketlauncher
  5:00 Kill: 4 3 7: Zeh killed Isgalamido by MOD_ROCKET_SPLASH
  5:00 Item: 5 item_armor_body
  5:02 Item: 5 ammo_rockets
  5:03 Item: 5 weapon_rocketlauncher
  5:03 Item: 3 weapon_rocketlauncher
  5:04 Item: 4 item_armor_combat
  5:08 Item: 4 item_health_large
  5:11 Item: 3 weapon_rocketlauncher
  5:11 Kill: 4 5 6: Zeh killed Assasinu Credi by MOD_ROCKET
  5:11 Kill: 4 3 7: Zeh killed Isgalamido by MOD_ROCKET_SPLASH
  5:11 Kill: 5 4 7: Assasinu Credi killed Zeh by MOD_ROCKET_SPLASH
  5:14 Item: 4 weapon_rocketlauncher
  5:14 Item: 4 weapon_rocketlauncher
  5:15 Item: 3 ammo_bullets
  5:17 Item: 5 weapon_rocketlauncher
  5:20 Item: 4 item_armor_shard
  5:20 Item: 4 item_armor_shard
  5:20 Item: 4 item_armor_shard
  5:22 Item: 3 weapon_rocketlauncher
  5:22 Item: 3 weapon_rocketlauncher
  5:22 Item: 3 weapon_rocketlauncher
  5:22 Item: 3 weapon_rocketlauncher
  5:24 Kill: 1022 3 19: <world> killed Isgalamido by MOD_FALLING
  5:25 Item: 2 weapon_rocketlauncher
  5:26 Kill: 4 2 7: Zeh killed Dono da Bola by MOD_ROCKET_SPLASH
  5:27 Item: 3 weapon_rocketlauncher
  5:29 Kill: 4 5 7: Zeh killed Assasinu Credi by MOD_ROCKET_SPLASH
  5:31 Item: 4 item_armor_shard
  5:31 Item: 4 item_armor_shard
  5:31 Item: 4 item_armor_shard
  5:32 Item: 5 weapon_rocketlauncher
  5:33 Item: 2 ammo_rockets
  5:34 Item: 5 item_armor_body
  5:34 Kill: 3 2 7: Isgalamido killed Dono da Bola by MOD_ROCKET_SPLASH
  5:36 Item: 3 weapon_rocketlauncher
  5:38 Item: 2 weapon_rocketlauncher
  5:38 Kill: 1022 3 19: <world> killed Isgalamido by MOD_FALLING
  5:38 Item: 2 weapon_rocketlauncher
  5:41 Item: 3 weapon_rocketlauncher
  5:41 Item: 4 item_health_large
  5:41 Item: 2 item_armor_combat
  5:43 Kill: 5 4 7: Assasinu Credi killed Zeh by MOD_ROCKET_SPLASH
  5:44 Item: 5 weapon_rocketlauncher
  5:46 Item: 4 weapon_rocketlauncher
  5:47 Item: 4 ammo_rockets
  5:50 Item: 2 weapon_rocketlauncher
  5:52 Kill: 5 2 7: Assasinu Credi killed Dono da Bola by MOD_ROCKET_SPLASH
  5:56 Kill: 5 3 7: Assasinu Credi killed Isgalamido by MOD_ROCKET_SPLASH
  5:56 Item: 2 weapon_rocketlauncher
  5:59 Item: 2 item_armor_body
  6:00 Item: 3 weapon_rocketlauncher
  6:01 Item: 5 item_armor_shard
  6:01 Item: 5 item_armor_shard
  6:02 Item: 5 item_armor_shard
  6:05 Item: 4 item_quad
  6:05 Item: 5 item_health_large
  6:05 Item: 3 weapon_railgun
  6:06 Kill: 2 3 6: Dono da Bola killed Isgalamido by MOD_ROCKET
  6:07 Item: 5 weapon_rocketlauncher
  6:08 Kill: 1022 2 22: <world> killed Dono da Bola by MOD_TRIGGER_HURT
  6:08 Kill: 4 5 7: Zeh killed Assasinu Credi by MOD_ROCKET_SPLASH
  6:11 Item: 5 weapon_rocketlauncher
  6:11 Item: 2 weapon_rocketlauncher
  6:12 Item: 3 ammo_slugs
  6:15 Item: 3 weapon_railgun
  6:16 Item: 5 item_armor_combat
  6:17 Item: 2 item_armor_shard
  6:17 Item: 2 item_armor_shard
  6:17 Item: 2 item_armor_shard
  6:21 Item: 4 weapon_rocketlauncher
  6:24 Kill: 1022 2 22: <world> killed Dono da Bola by MOD_TRIGGER_HURT
  6:28 Item: 2 weapon_rocketlauncher
  6:28 Kill: 4 5 7: Zeh killed Assasinu Credi by MOD_ROCKET_SPLASH
  6:28 Kill: 5 4 7: Assasinu Credi killed Zeh by MOD_ROCKET_SPLASH
  6:28 Item: 2 ammo_rockets
  6:32 Item: 5 weapon_rocketlauncher
  6:32 Item: 3 weapon_rocketlauncher
  6:32 Item: 3 item_quad
  6:32 Item: 3 weapon_rocketlauncher
  6:32 Item: 4 weapon_shotgun
  6:34 Kill: 2 3 7: Dono da Bola killed Isgalamido by MOD_ROCKET_SPLASH
  6:34 Item: 5 item_armor_body
  6:34 Item: 2 item_quad
  6:34 Item: 2 weapon_rocketlauncher
  6:35 Item: 2 item_armor_shard
  6:35 Item: 2 item_armor_shard
  6:35 Item: 2 item_armor_shard
  6:35 Kill: 2 4 6: Dono da Bola killed Zeh by MOD_ROCKET
  6:35 Kill: 2 2 7: Dono da Bola killed Dono da Bola by MOD_ROCKET_SPLASH
  6:38 Item: 2 weapon_rocketlauncher
  6:39 Item: 4 weapon_rocketlauncher
  6:39 Item: 4 ammo_rockets
  6:44 Item: 4 weapon_railgun
  6:46 Kill: 5 3 7: Assasinu Credi killed Isgalamido by MOD_ROCKET_SPLASH
  6:47 Item: 5 weapon_railgun
  6:50 Kill: 1022 2 22: <world> killed Dono da Bola by MOD_TRIGGER_HURT
  6:51 Item: 5 weapon_rocketlauncher
  6:54 Item: 2 weapon_rocketlauncher
  6:57 Item: 4 weapon_railgun
  6:57 Item: 3 item_quad
  6:59 Item: 4 item_health
  7:02 Item: 4 weapon_rocketlauncher
  7:02 Kill: 1022 3 22: <world> killed Isgalamido by MOD_TRIGGER_HURT
  7:02 Item: 5 weapon_shotgun
  7:03 Item: 5 ammo_shells
  7:03 Kill: 4 2 6: Zeh killed Dono da Bola by MOD_ROCKET
  7:08 Item: 4 item_health_large
  7:09 Item: 2 weapon_rocketlauncher
  7:10 Item: 3 weapon_rocketlauncher
  7:11 Item: 4 item_armor_shard
  7:11 Item: 4 item_armor_shard
  7:11 Item: 4 item_armor_shard
  7:11 Item: 4 item_armor_combat
  7:12 Kill: 2 5 7: Dono da Bola killed Assasinu Credi by MOD_ROCKET_SPLASH
  7:12 Item: 2 weapon_rocketlauncher
  7:12 Kill: 4 2 7: Zeh killed Dono da Bola by MOD_ROCKET_SPLASH
  7:13 Item: 4 weapon_rocketlauncher
  7:14 Item: 4 item_armor_shard
  7:14 Item: 4 item_armor_shard
  7:14 Item: 4 item_armor_shard
  7:16 Item: 2 weapon_rocketlauncher
  7:17 Item: 5 weapon_rocketlauncher
  7:18 Item: 5 ammo_rockets
  7:21 Item: 3 ammo_bullets
  7:21 Kill: 2 2 7: Dono da Bola killed Dono da Bola by MOD_ROCKET_SPLASH
  7:23 Kill: 4 3 7: Zeh killed Isgalamido by MOD_ROCKET_SPLASH
  7:23 Item: 4 weapon_rocketlauncher
  7:25 Item: 2 weapon_rocketlauncher
  7:29 Item: 3 ammo_rockets
  7:29 Item: 3 weapon_rocketlauncher
  7:29 Kill: 2 5 7: Dono da Bola killed Assasinu Credi by MOD_ROCKET_SPLASH
  7:30 Kill: 1022 2 19: <world> killed Dono da Bola by MOD_FALLING
  7:30 Item: 4 weapon_rocketlauncher
  7:33 Item: 2 weapon_rocketlauncher
  7:33 Item: 5 weapon_rocketlauncher
  7:36 Item: 5 item_armor_body
  7:37 Kill: 1022 4 19: <world> killed Zeh by MOD_FALLING
  7:37 Item: 5 weapon_rocketlauncher
  7:44 Kill: 5 2 6: Assasinu Credi killed Dono da Bola by MOD_ROCKET
  7:46 Item: 4 item_quad
  7:47 Item: 3 weapon_rocketlauncher
  7:50 Item: 2 weapon_rocketlauncher
  7:53 Item: 4 weapon_rocketlauncher
  7:53 Kill: 5 4 7: Assasinu Credi killed Zeh by MOD_ROCKET_SPLASH
  7:53 Kill: 3 5 6: Isgalamido killed Assasinu Credi by MOD_ROCKET
  7:54 Item: 2 weapon_rocketlauncher
  7:55 Item: 2 item_quad
  7:55 Item: 2 weapon_rocketlauncher
  7:56 Item: 4 weapon_rocketlauncher
  7:59 Item: 5 weapon_rocketlauncher
  8:00 Item: 5 ammo_rockets
  8:04 Kill: 2 5 7: Dono da Bola killed Assasinu Credi by MOD_ROCKET_SPLASH
  8:05 Item: 2 weapon_rocketlauncher
  8:07 Item: 5 weapon_rocketlauncher
  8:08 Kill: 2 5 7: Dono da Bola killed Assasinu Credi by MOD_ROCKET_SPLASH
  8:10 Item: 3 weapon_rocketlauncher
  8:11 Kill: 4 3 7: Zeh killed Isgalamido by MOD_ROCKET_SPLASH
  8:11 Kill: 2 2 7: Dono da Bola killed Dono da Bola by MOD_ROCKET_SPLASH
  8:12 Item: 4 item_armor_shard
  8:12 Item: 4 item_armor_shard
  8:12 Item: 4 item_armor_shard
  8:12 Item: 4 item_armor_combat
  8:13 Item: 5 weapon_rocketlauncher
  8:14 Item: 2 weapon_rocketlauncher
  8:15 Item: 4 item_armor_shard
  8:15 Item: 5 item_armor_body
  8:15 Item: 4 item_armor_shard
  8:15 Item: 4 item_armor_shard
  8:15 Item: 2 weapon_rocketlauncher
  8:16 Item: 4 item_quad
  8:16 Item: 4 weapon_rocketlauncher
  8:22 Item: 3 weapon_railgun
  8:24 Kill: 3 4 10: Isgalamido killed Zeh by MOD_RAILGUN
  8:25 Item: 3 weapon_railgun
  8:28 Item: 5 item_health_large
  8:28 Item: 4 weapon_shotgun
  8:30 Item: 2 item_health_large
  8:31 Kill: 3 5 10: Isgalamido killed Assasinu Credi by MOD_RAILGUN
  8:35 Kill: 4 3 1: Zeh killed Isgalamido by MOD_SHOTGUN
  8:37 Item: 5 weapon_rocketlauncher
  8:39 Item: 3 weapon_rocketlauncher
  8:39 Kill: 2 4 7: Dono da Bola killed Zeh by MOD_ROCKET_SPLASH
  8:40 Item: 2 weapon_shotgun
  8:41 Item: 3 ammo_bullets
  8:42 Item: 2 item_armor_shard
  8:42 Item: 2 item_armor_shard
  8:42 Item: 4 weapon_rocketlauncher
  8:42 Item: 2 item_armor_shard
  8:45 Item: 3 item_armor_shard
  8:45 Item: 3 item_armor_shard
  8:45 Item: 3 item_armor_shard
  8:45 Item: 3 item_armor_combat
  8:46 Kill: 4 5 7: Zeh killed Assasinu Credi by MOD_ROCKET_SPLASH
  8:47 Item: 4 weapon_rocketlauncher
  8:49 Kill: 3 2 7: Isgalamido killed Dono da Bola by MOD_ROCKET_SPLASH
  8:49 Item: 5 weapon_rocketlauncher
  8:52 Item: 3 weapon_rocketlauncher
  8:54 Item: 2 weapon_rocketlauncher
  8:55 Item: 4 item_quad
  8:56 Item: 2 item_armor_body
  8:56 Item: 3 ammo_rockets
  9:01 Kill: 4 5 6: Zeh killed Assasinu Credi by MOD_ROCKET
  9:04 Item: 5 weapon_rocketlauncher
  9:05 Kill: 4 5 7: Zeh killed Assasinu Credi by MOD_ROCKET_SPLASH
  9:09 Item: 4 ammo_rockets
  9:09 Item: 4 weapon_rocketlauncher
  9:09 Item: 3 item_armor_shard
  9:09 Item: 3 item_armor_shard
  9:10 Kill: 3 4 7: Isgalamido killed Zeh by MOD_ROCKET_SPLASH
  9:10 Kill: 1022 2 19: <world> killed Dono da Bola by MOD_FALLING
  9:11 Item: 5 weapon_rocketlauncher
  9:12 Item: 3 item_quad
  9:12 Item: 3 weapon_rocketlauncher
  9:14 Item: 2 weapon_rocketlauncher
  9:15 Item: 4 ammo_shells
  9:16 Item: 4 weapon_shotgun
  9:18 Item: 5 weapon_rocketlauncher
  9:19 Item: 4 weapon_shotgun
  9:20 Kill: 3 2 3: Isgalamido killed Dono da Bola by MOD_MACHINEGUN
  9:20 Kill: 5 4 7: Assasinu Credi killed Zeh by MOD_ROCKET_SPLASH
  9:21 Item: 5 weapon_shotgun
  9:22 Item: 2 weapon_rocketlauncher
  9:23 Item: 5 item_armor_shard
  9:24 Item: 5 item_armor_combat
  9:24 Item: 3 weapon_shotgun
  9:25 Item: 4 weapon_rocketlauncher
  9:25 Kill: 3 2 1: Isgalamido killed Dono da Bola by MOD_SHOTGUN
  9:25 Kill: 5 3 7: Assasinu Credi killed Isgalamido by MOD_ROCKET_SPLASH
  9:25 Kill: 2 5 6: Dono da Bola killed Assasinu Credi by MOD_ROCKET
  9:27 Item: 4 weapon_rocketlauncher
  9:27 Item: 2 weapon_rocketlauncher
  9:27 Item: 4 weapon_shotgun
  9:28 Item: 4 item_quad
  9:29 Item: 3 weapon_rocketlauncher
  9:29 Item: 4 item_armor_shard
  9:29 Item: 4 item_armor_shard
  9:29 Item: 4 item_armor_shard
  9:31 Item: 5 item_armor_body
  9:32 Item: 2 weapon_rocketlauncher
  9:36 Kill: 2 4 6: Dono da Bola killed Zeh by MOD_ROCKET
  9:36 Item: 2 item_armor_shard
  9:36 Item: 2 item_armor_shard
  9:37 Item: 5 weapon_rocketlauncher
  9:43 Item: 5 weapon_shotgun
  9:44 Item: 4 weapon_shotgun
  9:44 Item: 4 ammo_shells
  9:46 Item: 3 weapon_rocketlauncher
  9:47 Kill: 5 2 7: Assasinu Credi killed Dono da Bola by MOD_ROCKET_SPLASH
  9:48 Item: 4 weapon_shotgun
  9:50 Item: 2 weapon_rocketlauncher
  9:50 Item: 5 weapon_rocketlauncher
  9:51 Item: 4 weapon_shotgun
  9:52 Kill: 5 4 7: Assasinu Credi killed Zeh by MOD_ROCKET_SPLASH
  9:53 Item: 5 weapon_shotgun
  9:53 Kill: 3 5 7: Isgalamido killed Assasinu Credi by MOD_ROCKET_SPLASH
  9:53 Item: 2 item_armor_shard
  9:54 Item: 4 ammo_rockets
  9:54 Item: 4 weapon_rocketlauncher
  9:55 Item: 3 item_armor_shard
  9:56 Item: 3 item_armor_shard
  9:56 Item: 3 item_armor_shard
  9:56 Item: 3 item_armor_combat
  9:58 Kill: 3 2 6: Isgalamido killed Dono da Bola by MOD_ROCKET
  9:58 Item: 3 weapon_rocketlauncher
 10:00 Item: 5 item_armor_body
 10:01 Item: 2 weapon_rocketlauncher
 10:01 Item: 2 ammo_rockets
 10:07 Item: 5 weapon_rocketlauncher
 10:09 Kill: 5 3 7: Assasinu Credi killed Isgalamido by MOD_ROCKET_SPLASH
 10:12 Item: 4 item_quad
 10:13 Item: 3 weapon_rocketlauncher
 10:17 Item: 5 item_armor_shard
 10:17 Item: 5 item_armor_shard
 10:19 Kill: 3 4 7: Isgalamido killed Zeh by MOD_ROCKET_SPLASH
 10:19 Item: 5 weapon_shotgun
 10:20 Item: 3 item_quad
 10:21 Item: 5 item_armor_shard
 10:21 Item: 5 item_armor_shard
 10:21 Item: 5 item_armor_shard
 10:22 Item: 4 weapon_rocketlauncher
 10:24 Kill: 3 5 7: Isgalamido killed Assasinu Credi by MOD_ROCKET_SPLASH
 10:26 Item: 3 weapon_rocketlauncher
 10:27 Item: 4 item_armor_shard
 10:28 Item: 4 item_armor_combat
 10:29 Kill: 3 4 3: Isgalamido killed Zeh by MOD_MACHINEGUN
 10:30 Item: 5 weapon_rocketlauncher
 10:30 Item: 2 weapon_railgun
 10:32 Item: 2 item_health
 10:32 Item: 5 item_armor_body
 10:33 Item: 3 item_health_large
 10:35 Item: 4 weapon_rocketlauncher
 10:37 Item: 3 item_health_mega
 10:41 Kill: 1022 5 22: <world> killed Assasinu Credi by MOD_TRIGGER_HURT
 10:42 Item: 3 item_armor_shard
 10:42 Kill: 2 4 10: Dono da Bola killed Zeh by MOD_RAILGUN
 10:42 Item: 3 item_armor_shard
 10:43 Item: 5 ammo_rockets
 10:44 Item: 5 weapon_rocketlauncher
 10:44 Item: 3 weapon_rocketlauncher
 10:45 Item: 3 weapon_rocketlauncher
 10:46 Item: 3 ammo_rockets
 10:48 Item: 4 weapon_rocketlauncher
 10:51 Item: 5 weapon_rocketlauncher
 10:51 Item: 5 item_armor_shard
 10:51 Item: 5 item_armor_shard
 10:51 Item: 5 item_armor_shard
 10:55 Item: 4 item_health_large
 10:57 Kill: 3 4 7: Isgalamido killed Zeh by MOD_ROCKET_SPLASH
 11:00 Item: 4 weapon_rocketlauncher
 11:00 Kill: 5 2 7: Assasinu Credi killed Dono da Bola by MOD_ROCKET_SPLASH
 11:00 Item: 5 item_quad
 11:01 Item: 3 item_health_large
 11:03 Item: 3 weapon_rocketlauncher
 11:04 Item: 2 weapon_rocketlauncher
 11:04 Item: 3 weapon_rocketlauncher
 11:07 Item: 2 item_armor_combat
 11:16 Kill: 1022 3 19: <world> killed Isgalamido by MOD_FALLING
 11:17 Kill: 2 5 7: Dono da Bola killed Assasinu Credi by MOD_ROCKET_SPLASH
 11:18 Item: 2 item_armor_body
 11:18 Item: 4 item_armor_shard
 11:18 Item: 4 item_armor_shard
 11:18 Item: 4 item_armor_shard
 11:21 Item: 4 item_armor_shard
 11:21 Item: 4 item_armor_shard
 11:21 Item: 4 item_armor_shard
 11:21 Item: 5 weapon_rocketlauncher
 11:23 Item: 5 weapon_railgun
 11:24 Item: 3 weapon_rocketlauncher
 11:24 Item: 4 weapon_shotgun
 11:25 Item: 4 ammo_shells
 11:25 Item: 3 weapon_rocketlauncher
 11:26 Item: 2 weapon_rocketlauncher
 11:26 Kill: 5 4 7: Assasinu Credi killed Zeh by MOD_ROCKET_SPLASH
 11:30 Item: 4 weapon_shotgun
 11:30 Kill: 5 5 7: Assasinu Credi killed Assasinu Credi by MOD_ROCKET_SPLASH
 11:30 Kill: 3 2 7: Isgalamido killed Dono da Bola by MOD_ROCKET_SPLASH
 11:31 Item: 3 weapon_rocketlauncher
 11:34 Item: 2 weapon_rocketlauncher
 11:37 Item: 5 ammo_rockets
 11:37 Kill: 1022 4 22: <world> killed Zeh by MOD_TRIGGER_HURT
 11:38 Item: 3 item_armor_combat
 11:40 Kill: 1022 5 19: <world> killed Assasinu Credi by MOD_FALLING
 11:40 Item: 4 weapon_rocketlauncher
 11:43 Item: 5 weapon_rocketlauncher
 11:44 Item: 3 item_armor_shard
 11:44 Item: 3 item_armor_shard
 11:44 Item: 3 item_armor_shard
 11:47 Kill: 4 2 7: Zeh killed Dono da Bola by MOD_ROCKET_SPLASH
 11:47 Kill: 3 5 6: Isgalamido killed Assasinu Credi by MOD_ROCKET
 11:50 Item: 5 ammo_rockets
 11:50 Item: 4 weapon_rocketlauncher
 11:50 Item: 5 weapon_rocketlauncher
 11:51 Item: 5 weapon_rocketlauncher
 11:53 Item: 2 weapon_rocketlauncher
 11:56 Item: 5 weapon_rocketlauncher
 11:57 Item: 2 item_armor_shard
 11:57 Item: 2 item_armor_shard
 11:57 Item: 2 item_armor_shard
 11:57 Kill: 4 3 7: Zeh killed Isgalamido by MOD_ROCKET_SPLASH
 11:57 Exit: Fraglimit hit.
 11:57 score: 20  ping: 4  client: 4 Zeh
 11:57 score: 19  ping: 3  client: 3 Isgalamido
 11:57 score: 11  ping: 0  client: 5 Assasinu Credi
 11:57 score: 5  ping: 9  client: 2 Dono da Bola
 </pre></code>
</details>

Full logfile example: [data/example.log](./data/example.log)

- ### Parsing result
  ```
  "game_1": {
    "total_kills": 105,
    "players": [
      "Dono da Bola",
      "Isgalamido",
      "Zeh",
      "Assasinu Credi"
    ],
    "kills": {
      "Dono da Bola": 14,
      "Isgalamido": 21,
      "Zeh": 20,
      "Assasinu Credi": 14
    },
    "kills_by_means": {
      "MOD_TRIGGER_HURT": 9,
      "MOD_FALLING": 11,
      "MOD_ROCKET": 20,
      "MOD_RAILGUN": 8,
      "MOD_ROCKET_SPLASH": 51,
      "MOD_MACHINEGUN": 4,
      "MOD_SHOTGUN": 2
    }
  }
  ```

## Author

- **Name:** Gabriel Henrique Botta Coutini
- **Email:** gcoutini@hotmail.com
- **GitHub:** [gcoutini](https://github.com/yourusername)