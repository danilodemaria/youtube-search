import json
import sys
from youtubesearchpython import VideosSearch
title = sys.argv[1]
lim = sys.argv[2]

videosSearch = VideosSearch(title, limit=int(lim))
print(json.dumps(videosSearch.result(), indent=8, sort_keys=False))




