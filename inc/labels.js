var chartTypes = {
	"blockio": {
		"name": "Block IO",
		"title": "kB/sec (higher is better)",
		"types": ["outblk", "outrw", "inblk"]
	},
	"metadata": {
		"name": "File metadata",
		"title": "files/sec (higher is better)",
		"types": ["sc", "sd", "rc", "rd"]
	},
	"metadata-read": {
		"name": "File metadata (read)",
		"title": "files/sec (higher is better)",
		"types": ["sr", "rr"]
	},
	"blockio-cpu": {
		"name": "Block IO CPU",
		"title": "CPU usage in % (lower is better)",
		"types": ["outblkcpu", "outrwcpu", "inblkcpu", "seekcpu"]
	},
	"metadata-cpu": {
		"name": "Seq and Random CPU",
		"title": "CPU usage in % (lower is better)",
		"types": ["sccpu", "srcpu", "sdcpu", "rccpu", "rrcpu", "rdcpu"]
	},
	"blockio-latency": {
		"name": "Block IO Latency",
		"title": "milliseconds (lower is better)",
		"types": ["latoutblk", "latoutrw", "latinblk"]
	},
	"metadata-latency": {
		"name": "File metadata Latency",
		"title": "milliseconds (lower is better)",
		"types": ["latsc", "latsd", "latrc", "latrd"]
	},
	"metadata-read-latency": {
		"name": "File metadata (read) Latency",
		"title": "milliseconds (lower is better)",
		"types": ["latsr", "latrr"]
	}
};
var columnLabels = {
	"vera": "Version",
	"verb": "Version",
	"name": "Name",
	"conc": "Concurrency",
	"stz": "Unknown stz",
	"sz": "Size",
	"tta": "Empty tta",
	"outch": "Seq Char Output",
	"outchcpu": "Seq Char Output CPU",
	"outblk": "Seq Block Output",
	"outblkcpu": "Seq Block Output CPU",
	"outrw": "Block Rewrite",
	"outrwcpu": "Block Rewrite CPU",
	"inch": "Char Input",
	"inchcpu": "Char Input CPU",
	"inblk": "Block Input",
	"inblkcpu": "Block Input CPU",
	"seek": "Random Seek",
	"seekcpu": "Random Seek CPU",
	"ttb": "Empty ttb",
	"ttc": "Empty ttc",
	"ttd": "Empty ttd",
	"tte": "Empty tte",
	"ttf": "Empty ttf",
	"sc": "Seq Create",
	"sccpu": "Seq Create CPU",
	"sr": "Seq Read",
	"srcpu": "Seq Read",
	"sd": "Seq Delete",
	"sdcpu": "Seq Delete CPU",
	"rc": "Random Create",
	"rccpu": "Random Create CPU",
	"rr": "Random Read",
	"rrcpu": "Random Read CPU",
	"rd": "Random Delete",
	"rdcpu": "Random Delete CPU",
	"latoutch": "Latency Char Output",
	"latoutblk": "Latency Block Output",
	"latoutrw": "Latency Rewrite",
	"latinch": "Latency Input Char",
	"latinblk": "Latency Input Block",
	"latrand": "Latency Random seek",
	"latsc": "Latency Seq Create",
	"latsr": "Latency Seq Read",
	"latsd": "Latency Seq Delete",
	"latrc": "Latency Random Create",
	"latrr": "Latency Random Read",
	"latrd": "Latency Random Delete"
};
