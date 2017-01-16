
defineClass("ViewController", {
            test: function() {
            var view1 = require('UIView').alloc().init()
            view1.setFrame({x:100,y:100,width:100,height:100})
//            var view = require('UIView').alloc();
//            view.setFrame({x:100, y:200, width:200, height:100});
            var redColor = require('UIColor').redColor();
            view1.setBackgroundColor(redColor);
            self.view().addSubview(view1);
            },
            tableView_cellForRowAtIndexPath: function(tableView, indexPath) {
            var cell = tableView.dequeueReusableCellWithIdentifier("cell")
            if (!cell) {
            cell = require('UITableViewCell').alloc().initWithStyle_reuseIdentifier(0, "cell")
            }
            cell.textLabel().setText("meijiaqing");
            var redColor = require('UIColor').redColor();
            cell.setBackgroundColor(redColor);
            return cell
            },
            
            //instance method definitions
            tableView_didSelectRowAtIndexPath: function(tableView, indexPath) {
            var row = indexPath.row()
            if (self.dataSource().length > row) {  // 加上判断越界的逻辑
            var content = self.dataArr()[row];
            }
            }
            }, {});
