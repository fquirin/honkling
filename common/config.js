const evaluationConfig = {
	'numAudioFilesPerCommand' : 10
}

const audioConfig = {
	'offlineSampleRate' : 16000,
	'offlineHopSize' : 10, // in ms
	'offlineWindowSize' : 30, // in ms
	'micInputWaitTime' : 5, // in s
	'noiseThreshold' : 0.015
}

const modelConfig = {
	CNN_TRAD_POOL2 : {
		input_shape : [101, 40, 1],
		dropout_prob : 0.5,
		height : 101,
		width : 40,
		n_feature_maps1 : 64,
		n_feature_maps2 : 64,
		conv1_size : [20, 8],
		conv2_size : [10, 4],
		conv1_stride : [1, 1],
		conv2_stride : [1, 1],
		conv1_pool : [2, 2],
		conv2_pool : [1, 1],
		tf_variant : true
	},
	CNN_ONE_STRIDE1 : {
		input_shape : [101, 40, 1],
		dropout_prob : 0.5,
		height : 101,
		width : 40,
		n_feature_maps1 : 186,
		conv1_size : [100, 8],
		conv1_pool : [1, 1],
		conv1_stride : [1, 1],
		dnn1_size : 128,
		dnn2_size : 128,
		tf_variant : true
	},
	CNN_TSTRIDE2 : {
		input_shape : [101, 40, 1],
		dropout_prob : 0.5,
		height : 101,
		width : 40,
		n_feature_maps1 : 78,
		n_feature_maps2 : 78,
		conv1_size : [16, 8],
		conv2_size : [9, 4],
		conv1_pool : [1, 3],
		conv1_stride : [2, 1],
		conv2_stride : [1, 1],
		conv2_pool : [1, 1],
		dnn1_size : 128,
		dnn2_size : 128
	},
	CNN_TSTRIDE4 : {
		input_shape : [101, 40, 1],
		dropout_prob : 0.5,
		height : 101,
		width : 40,
		n_feature_maps1 : 100,
		n_feature_maps2 : 78,
		conv1_size : [16, 8],
		conv2_size : [5, 4],
		conv1_pool : [1, 3],
		conv1_stride : [4, 1],
		conv2_stride : [1, 1],
		conv2_pool : [1, 1],
		dnn1_size : 128,
		dnn2_size : 128
	},
	CNN_TSTRIDE8 : {
		input_shape : [101, 40, 1],
		dropout_prob : 0.5,
		height : 101,
		width : 40,
		n_feature_maps1 : 126,
		n_feature_maps2 : 78,
		conv1_size : [16, 8],
		conv2_size : [5, 4],
		conv1_pool : [1, 3],
		conv1_stride : [8, 1],
		conv2_stride : [1, 1],
		conv2_pool : [1, 1],
		dnn1_size : 128,
		dnn2_size : 128
	},
	CNN_TPOOL2 : {
		input_shape : [101, 40, 1],
		dropout_prob : 0.5,
		height : 101,
		width : 40,
		n_feature_maps1 : 94,
		n_feature_maps2 : 94,
		conv1_size : [21, 8],
		conv2_size : [6, 4],
		conv1_pool : [2, 3],
		conv1_stride : [1, 1],
		conv2_stride : [1, 1],
		conv2_pool : [1, 1],
		dnn1_size : 128,
		dnn2_size : 128
	},
	CNN_TPOOL3 : {
		input_shape : [101, 40, 1],
		dropout_prob : 0.5,
		height : 101,
		width : 40,
		n_feature_maps1 : 94,
		n_feature_maps2 : 94,
		conv1_size : [15, 8],
		conv2_size : [6, 4],
		conv1_pool : [3, 3],
		conv1_stride : [1, 1],
		conv2_stride : [1, 1],
		conv2_pool : [1, 1],
		dnn1_size : 128,
		dnn2_size : 128
	},
	CNN_ONE_FPOOL3 : {
		input_shape : [101, 40, 1],
		dropout_prob : 0.5,
		height : 101,
		width : 40,
		n_feature_maps1 : 54,
		conv1_size : [100, 8],
		conv1_pool : [1, 3],
		conv1_stride : [1, 1],
		dnn1_size : 128,
		dnn2_size : 128
	},
	CNN_ONE_FSTRIDE4 : {
		input_shape : [101, 40, 1],
		dropout_prob : 0.5,
		height : 101,
		width : 40,
		n_feature_maps1 : 186,
		conv1_size : [101, 8],
		conv1_pool : [1, 1],
		conv1_stride : [1, 4],
		dnn1_size : 128,
		dnn2_size : 128
	},
	CNN_ONE_FSTRIDE8 : {
		input_shape : [101, 40, 1],
		dropout_prob : 0.5,
		height : 101,
		width : 40,
		n_feature_maps1 : 336,

		conv1_size : [101, 8],
		conv1_pool : [1, 1],
		conv1_stride : [1, 8],
		dnn1_size : 128,
		dnn2_size : 128
	},

	// ResNet Config

	RES15 : {
		input_shape : [101, 40, 1],
		use_dilation : true,
		n_layers : 13,
		n_feature_maps : 45,
		conv_size : [3, 3],
		conv_stride : [1, 1],
	},
	RES8 : {
		input_shape : [101, 40, 1],
		n_layers : 6,
		n_feature_maps : 45,
		res_pool : [4, 3],
		conv_size : [3, 3],
		conv_stride : [1, 1],
		use_dilation : false
	},
	RES26 : {
		input_shape : [101, 40, 1],
		n_layers : 24,
		n_feature_maps : 45,
		res_pool : [2, 2],
		conv_size : [3, 3],
		conv_stride : [1, 1],
		use_dilation : false
	},
	RES15_NARROW : {
		input_shape : [101, 40, 1],
		use_dilation : true,
		n_layers : 13,
		n_feature_maps : 19,
		conv_size : [3, 3],
		conv_stride : [1, 1]
	},
	RES8_NARROW : {
		input_shape : [101, 40, 1],
		n_layers : 6,
		n_feature_maps : 19,
		res_pool : [4, 3],
		use_dilation : false,
		conv_size : [3, 3],
		conv_stride : [1, 1]
	},
	RES26_NARROW : {
		input_shape : [101, 40, 1],
		n_layers : 24,
		n_feature_maps : 19,
		res_pool : [2, 2],
		use_dilation : false,
		conv_size : [3, 3],
		conv_stride : [1, 1]
	}
}