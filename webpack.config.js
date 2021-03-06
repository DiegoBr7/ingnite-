const require=('path')

module.exports = {
    entry: path.resolve(__dirname, 'src','index.jsx'),
    output:{
        path: path.resolve(__dirname , 'dist'),
    },
     resolve: {
         extensions:['.js','.jsx'],
     },
     module: {
        rules:[
            {
                test:  /\.jsx$/,
                exclude: /node_modules/,
                use: 'babel-loader',

            }
        ]
     }
};