/**
 * Created by summer on 2018/9/23.
 */
import React, { Component } from 'react';
import classnames from 'classnames';

import './Filter.scss';

export default class Filter extends Component {
    state = {
        filtersData: [
            {
                id: 0,
                name: '城市',
                currSelectedItemIndex: 0, // 记录选中的index，便于UI展示
                isExpand: false, // 记录是否展示下拉, 暂时性的
                children: [
                    {
                        id: 0,
                        name: '不限',
                        isSelected: false,
                    },
                    {
                        id: 1,
                        name: '上海',
                        isSelected: false,
                    },
                    {
                        id: 2,
                        name: '北京',
                        isSelected: false,
                    },
                    {
                        id: 3,
                        name: '深圳',
                        isSelected: false,
                    },
                    {
                        id: 4,
                        name: '广州',
                        isSelected: false,
                    },
                    {
                        id: 5,
                        name: '杭州',
                        isSelected: false,
                    },
                    {
                        id: 6,
                        name: '南京',
                        isSelected: false,
                    },
                    {
                        id: 7,
                        name: '成都',
                        isSelected: false,
                    },
                    {
                        id: 8,
                        name: '武汉',
                        isSelected: false,
                    },
                ],
            },
            {
                id: 1,
                name: '区域',
                currSelectedItemIndex: 0,
                isExpand: false,
                children: [
                    {
                        id: 0,
                        name: '不限',
                        isSelected: false,
                    },
                    {
                        id: 1,
                        name: '浦东',
                        isSelected: false,
                    },
                    {
                        id: 2,
                        name: '徐汇',
                        isSelected: false,
                    },
                    {
                        id: 3,
                        name: '静安',
                        isSelected: false,
                    },
                    {
                        id: 4,
                        name: '长宁',
                        isSelected: false,
                    },
                    {
                        id: 5,
                        name: '普陀',
                        isSelected: false,
                    },
                ],
            },
            {
                id: 2,
                name: '资产类型',
                currSelectedItemIndex: 0,
                isExpand: false,
                children: [
                    {
                        id: 0,
                        name: '不限',
                        isSelected: false,
                    },
                    {
                        id: 1,
                        name: '商业',
                        isSelected: false,
                    },
                    {
                        id: 2,
                        name: '办公',
                        isSelected: false,
                    },
                    {
                        id: 3,
                        name: '酒店',
                        isSelected: false,
                    },
                ],
            },
            {
                id: 3,
                name: '总建面积',
                currSelectedItemIndex: 0,
                isExpand: false,
                children: [
                    {
                        id: 0,
                        name: '不限',
                        isSelected: false,
                    },
                    {
                        id: 1,
                        name: '30万㎡以上',
                        isSelected: false,
                    },
                    {
                        id: 2,
                        name: '20－30万㎡',
                        isSelected: false,
                    },
                    {
                        id: 3,
                        name: '20－30万㎡',
                        isSelected: false,
                    },
                    {
                        id: 4,
                        name: '10－20万㎡',
                        isSelected: false,
                    },
                    {
                        id: 5,
                        name: '10万㎡以下',
                        isSelected: false,
                    },
                ],
            },
        ], // 记录当前选中filter name，便于取值，减少循环获取
        currSelectedNameIndex: 0  // 记录当前选中filter下拉选项，便于取值，减少循环获取
    };

    onFilterNameHandle = index => {
        const { filtersData: oldFiltersData, currSelectedNameIndex } = this.state;
        if (currSelectedNameIndex === index) { // 当还是
            oldFiltersData[index].isExpand = !oldFiltersData[index].isExpand;
            const filtersData = [...oldFiltersData];
            this.setState({
                filtersData,
                currSelectedNameIndex: index,
            });
            return;
        }
        oldFiltersData.forEach((f, i) => {
            f.isExpand = false;
            if (i === index) {
                f.isExpand = true;
            }
        });
        const filtersData = [...oldFiltersData];
        this.setState({
            filtersData,
            currSelectedNameIndex: index,
        });
    };

    onFilterItemHandle = index => {
        const { filtersData: oldFilterData, currSelectedNameIndex } = this.state;
        if (index === 0) { // 当为不限时，将之前选中取消，不限和其他选项为互斥关系
            oldFilterData[currSelectedNameIndex].children.forEach((c, i) => {
                if (i === 0) {
                    c.isSelected = true;
                } else {
                    c.isSelected = false;
                }
            });
        } else {
            if (currSelectedNameIndex === 2) { // 当为资产类型时，可多选
                oldFilterData[currSelectedNameIndex].children.forEach((f, i) => {
                    if (i === 0) {
                        f.isSelected = false;
                    }else if (i === index) {
                        f.isSelected = !f.isSelected;
                    }
                });
            } else { // 其他单选
                oldFilterData[currSelectedNameIndex].children.forEach((f, i) => {
                    f.isSelected = false;
                    if (i === index) {
                        f.isSelected = true;
                    }
                });
            }
        }
        oldFilterData[currSelectedNameIndex].currSelectedItemIndex = index;
        const filtersData = [...oldFilterData];
        this.setState({
            filtersData,
            currSelectedNameIndex: index,
        });
    };

    onCloseMaskHandle = () => {
        const { filtersData: oldFiltersData, currSelectedNameIndex } = this.state;
        oldFiltersData[currSelectedNameIndex].isExpand = !oldFiltersData[currSelectedNameIndex].isExpand;
        const filtersData = [...oldFiltersData];
        this.setState({
            filtersData,
            currSelectedNameIndex
        });
    };

    render() {
        const { filtersData, currSelectedNameIndex } = this.state;
        return (
            <div className="filter-wrapper">
                <div className="tab-content">
                    <div className="filter-wrap">
                        {filtersData.map((t, index) => {
                            let name = t.name;
                            if (t.currSelectedItemIndex === 0) {
                                name = t.name;
                            } else if (t.currSelectedItemIndex === 2) {
                                name = '已选';
                            } else {
                                name = t.children[t.currSelectedItemIndex].name;
                            }
                            return (
                                <div
                                    key={index}
                                    className="filter-item"
                                    onClick={e => {
                                        e.preventDefault();
                                        e.stopPropagation();
                                        this.onFilterNameHandle(index);
                                    }}
                                >
                                    <span>{name}</span>
                                    {t.isExpand ? (
                                        <img src={require('../../assets/static/yellow_selected_icon.svg')} alt="filter" />
                                    ) : (
                                        <img src={require('../../assets/static/arrow_down_select_icon.svg')} alt="filter" />
                                    )}
                                </div>
                            );
                        })}
                        {
                            (filtersData[currSelectedNameIndex].isExpand) && (
                                <div className="filter-content">
                                    {filtersData[currSelectedNameIndex].children.map((f, i) => {
                                        return (
                                            <div
                                                key={i}
                                                className={classnames('filter-name', { active: f.isSelected })}
                                                onClick={e => {
                                                    e.preventDefault();
                                                    e.stopPropagation();
                                                    this.onFilterItemHandle(i);
                                                }}
                                            >
                                                {f.name}
                                                {f.isSelected && (
                                                    <img className="selected" src={require('../../assets/static/right_checked_icon.svg')} alt="check" />
                                                )}
                                            </div>
                                        );
                                    })}
                                </div>
                            )}
                    </div>
                    {(filtersData[currSelectedNameIndex].isExpand) && <div className="filter-mask" onClick={(e) => {
                        e.preventDefault();
                        this.onCloseMaskHandle();
                    }
                    } />}
                </div>
            </div>
        );
    }
}