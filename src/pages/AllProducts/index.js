import {
  Layout,
  Breadcrumb,
  Row,
  Col,
  Checkbox,
  Button,
  Select,
  Flex,
  Pagination,
  Collapse,
} from "antd";
import { Link } from "react-router-dom";
import "./AllProducts.scss";
import { useDispatch, useSelector } from "react-redux";
import useFetch from "../../hooks/useFetch";
import ProductCard from "../../components/ProductCard";
import { useEffect, useRef, useState } from "react";
import { addFilter, deleteFilter } from "../../actions/filter";
const breadcrumbItems = [
  {
    title: <Link to="/">Home</Link>,
  },
  {
    title: "All Products",
  },
];
export default function AllProducts() {
  const [pages, setPages] = useState(1);
  const filter = useSelector((state) => state.filterReducer);
  const [checkFilter, setCheckFilter] = useState(true);
  const dispatch = useDispatch();
  const [total] = useFetch({ ...filter, checkFilter });
  const [data] = useFetch({ ...filter, pages, limit: 12, checkFilter });
  const handleFilter = (e) => {
    const keys = e.target.name.split(",");
    const value = e.target.value;
    const obj = {};
    keys.forEach((key, index) => {
      obj[key] = [value[index]];
    });
    if (e.target.checked) {
      dispatch(addFilter(obj));
      setCheckFilter(!checkFilter);
    } else {
      console.log("test");
      dispatch(deleteFilter(obj));
      setCheckFilter(!checkFilter);
    }
  };
  const handleSelect = (e) => {
    let key = "sort";
    if (typeof e === "boolean") {
      key = "newArrival";
    }
    const value = e;
    const obj = {};
    obj[key] = value;
    dispatch(addFilter(obj));
    setCheckFilter(!checkFilter);
  };

  const filterItems = [
    {
      key: "1",
      label: "Loại sản phẩm",
      children: (
        <Flex gap={10} vertical>
          <Checkbox
            name={"tags,category"}
            value={[["JACKETS", "SPORT"].join(","), "shirt".toUpperCase()]}
            onChange={handleFilter}
            // checked={handleChecked({ tags: "JACKETS", category: "shirt" })}
          >
            Áo khoác
          </Checkbox>
          <Checkbox
            name={"tags,category"}
            value={[["HOODIE", "SPORT"].join(","), "shirt".toUpperCase()]}
            onChange={handleFilter}
            // checked={handleChecked({ tags: "HOODIE", category: "shirt" })}
          >
            Áo hoodie
          </Checkbox>
          <Checkbox
            name={"tags,category"}
            value={[["T-SHIRT", "SPORT"].join(","), "shirt".toUpperCase()]}
            onChange={handleFilter}
            // checked={handleChecked({ tags: "T-SHIRT", category: "shirt" })}
          >
            Áo T-shirt
          </Checkbox>
          <Checkbox
            name={"tags,category"}
            value={[["POLO", "SPORT"].join(","), "shirt".toUpperCase()]}
            onChange={handleFilter}
            // checked={handleChecked({ tags: "POLO", category: "shirt" })}
          >
            Áo Polo
          </Checkbox>

          <Checkbox
            name={"tags,category"}
            value={[["SHORTS", "SPORT"].join(","), "trousers".toUpperCase()]}
            onChange={handleFilter}
            // checked={handleChecked({
            //   tags: "SHORT",
            //   category: "trousers",
            // })}
          >
            Quần short
          </Checkbox>
          <Checkbox
            name={"tags,category"}
            value={[
              ["LONG-PANTS", "SPORT"].join(","),
              "trousers".toUpperCase(),
            ]}
            onChange={handleFilter}
            // checked={handleChecked({
            //   tags: "LONG-PAINT",
            //   category: "trousers",
            // })}
          >
            Quần dài
          </Checkbox>

          <Checkbox
            name={"category"}
            value={["shoes".toUpperCase()]}
            onChange={handleFilter}
            // checked={handleChecked({ category: "shoes" })}
          >
            Giày
          </Checkbox>
          <Checkbox
            name={"category"}
            value={["accessory".toUpperCase()]}
            onChange={handleFilter}
            // checked={handleChecked({ category: "accessory" })}
          >
            Phụ kiện
          </Checkbox>
        </Flex>
      ),
    },
    {
      key: "2",
      label: "Thương hiệu",
      children: (
        <Flex gap={10} vertical>
          <Checkbox
            name="brand"
            value={["NIKE"]}
            onChange={handleFilter}
            // checked={handleChecked({ brand: "NIKE" })}
          >
            Nike
          </Checkbox>
          <Checkbox
            name="brand"
            value={["ADIDAS"]}
            onChange={handleFilter}
            // checked={handleChecked({ brand: "ADIDAS" })}
          >
            Adidas
          </Checkbox>
          <Checkbox
            name="brand"
            value={["ASICS"]}
            onChange={handleFilter}
            // checked={handleChecked({ brand: "ASICS" })}
          >
            Asics
          </Checkbox>
          <Checkbox
            name="brand"
            value={["LI-NING"]}
            onChange={handleFilter}
            // checked={handleChecked({ brand: "LI-NING" })}
          >
            LI-NING
          </Checkbox>
        </Flex>
      ),
    },
    {
      key: "6",
      label: "Dòng sản phẩm",
      children: (
        <Flex gap={10} vertical>
          <Checkbox name={"sports"} value={["SPORT"]} onChange={handleFilter}>
            Thể thao
          </Checkbox>
          <Checkbox
            name={"sports"}
            value={["FOOTBALL", "SPORT"]}
            onChange={handleFilter}
          >
            Bóng đá
          </Checkbox>
          <Checkbox
            name={"sports"}
            value={["BASKETBALL"]}
            onChange={handleFilter}
          >
            Bóng rổ
          </Checkbox>
          <Checkbox
            name={"sports"}
            value={["TENNIS", "SPORT"]}
            onChange={handleFilter}
          >
            Tennis
          </Checkbox>
          <Checkbox
            name={"sports"}
            value={["GOLF", "SPORT"]}
            onChange={handleFilter}
          >
            GOLF
          </Checkbox>
          <Checkbox
            name={"sports"}
            value={["RUNNING", "SPORT"]}
            onChange={handleFilter}
          >
            Chạy bộ
          </Checkbox>
        </Flex>
      ),
    },
    {
      key: "3",
      label: "Kích thước",
      children: (
        <Flex gap={10} vertical>
          <Checkbox name="sizes" value={["XS"]} onChange={handleFilter}>
            XS
          </Checkbox>
          <Checkbox name="sizes" value={["S"]} onChange={handleFilter}>
            S
          </Checkbox>
          <Checkbox name="sizes" value={["L"]} onChange={handleFilter}>
            L
          </Checkbox>
          <Checkbox name="sizes" value={["M"]} onChange={handleFilter}>
            M
          </Checkbox>
          <Checkbox name="sizes" value={["XL"]} onChange={handleFilter}>
            XL
          </Checkbox>
          <Checkbox name="sizes" value={["6"]} onChange={handleFilter}>
            6
          </Checkbox>
          <Checkbox name="sizes" value={["6.5"]} onChange={handleFilter}>
            6.5
          </Checkbox>
          <Checkbox name="sizes" value={["7"]} onChange={handleFilter}>
            {" "}
            7
          </Checkbox>
          <Checkbox name="sizes" value={["8"]} onChange={handleFilter}>
            8
          </Checkbox>
          <Checkbox name="sizes" value={["8.5"]} onChange={handleFilter}>
            8.5
          </Checkbox>
          <Checkbox name="sizes" value={["9"]} onChange={handleFilter}>
            9
          </Checkbox>
          <Checkbox name="sizes" value={["9.5"]} onChange={handleFilter}>
            9.5
          </Checkbox>
          <Checkbox name="sizes" value={["10"]} onChange={handleFilter}>
            10
          </Checkbox>
          <Checkbox name="sizes" value={["11"]} onChange={handleFilter}>
            11
          </Checkbox>
        </Flex>
      ),
    },
    {
      key: "4",
      label: "Mức Giá",
      children: (
        <Flex gap={10} vertical>
          <Checkbox
            name={"price"}
            value={[[0, 500000]]}
            onChange={handleFilter}
          >
            Giá dưới 500.000₫
          </Checkbox>
          <Checkbox
            name={"price"}
            value={[[500000, 1000000]]}
            onChange={handleFilter}
          >
            500.000₫ - 1.000.000₫
          </Checkbox>
          <Checkbox
            name={"price"}
            value={[[1000000, 2000000]]}
            onChange={handleFilter}
          >
            1.000.000₫ - 2.000.000₫
          </Checkbox>
          <Checkbox
            name={"price"}
            value={[[2000000, 3000000]]}
            onChange={handleFilter}
          >
            2.000.000₫ - 3.000.000₫
          </Checkbox>
          <Checkbox
            name={"price"}
            value={[[3000000, 5000000]]}
            onChange={handleFilter}
          >
            3.000.000₫ - 5.000.000₫
          </Checkbox>
          <Checkbox
            name={"price"}
            value={[[5000000, 99999999999]]}
            onChange={handleFilter}
          >
            Giá trên 5.000.000₫
          </Checkbox>
        </Flex>
      ),
    },
    {
      key: "5",
      label: "Giới tính",
      children: (
        <Flex gap={10} vertical>
          <Checkbox
            name="genders"
            value={["MEN"]}
            onChange={handleFilter}
            // checked={handleChecked({ gender: "MEN" })}
          >
            Nam
          </Checkbox>{" "}
          <Checkbox
            name="genders"
            value={["WOMEN"]}
            onChange={handleFilter}
            // checked={handleChecked({ gender: "WOMEN" })}
          >
            Nữ
          </Checkbox>
          <Checkbox
            name="genders"
            value={["KIDS"]}
            onChange={handleFilter}
            // checked={handleChecked({ gender: "KIDS" })}
          >
            Trẻ em
          </Checkbox>{" "}
          <Checkbox
            name="genders"
            value={["GIRLS"]}
            onChange={handleFilter}
            // checked={handleChecked({ gender: "GIRLS" })}
          >
            Bé nam
          </Checkbox>
          <Checkbox
            name="genders"
            value={["BOYS"]}
            onChange={handleFilter}
            // checked={handleChecked({ gender: "BOYS" })}
          >
            Bé gái
          </Checkbox>
        </Flex>
      ),
    },
  ];
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="allProducts">
      <div className="allProducts__breadcrumb">
        <Breadcrumb items={breadcrumbItems} />
      </div>
      <Layout className="allProducts__main">
        <Layout.Sider width={300} theme="light">
          <Collapse items={filterItems} ghost />
        </Layout.Sider>
        <Layout.Content className="allProducts__content">
          <Flex justify="flex-end">
            <Select
              defaultValue={"default"}
              size="large"
              style={{ width: 180 }}
              onChange={handleSelect}
            >
              <Select.Option value="default">Mặc định</Select.Option>
              <Select.Option name="sort" value="-discountPrice">
                Giá giảm dần
              </Select.Option>
              <Select.Option name="sort" value="discountPrice">
                Giá từ tăng dần
              </Select.Option>
              <Select.Option name="sort" value="-title">
                Tên A -{">"} Z
              </Select.Option>
              <Select.Option name="sort" value="title">
                Tên Z -{">"} A
              </Select.Option>
              <Select.Option name="newArrival" value={true}>
                Hàng mới
              </Select.Option>
            </Select>
          </Flex>
          <Row gutter={[30, 30]} className="allProducts__list">
            {data.isLoading &&
              data.products.map((item, idx) => (
                <Col span={8} key={idx}>
                  <ProductCard item={item} />
                </Col>
              ))}
          </Row>
        </Layout.Content>
      </Layout>
      <Pagination
        align="end"
        total={total.products ? total.products.length : 1}
        pageSize={10}
        showSizeChanger={false}
        onChange={(pages, _) => {
          setPages(pages);
          window.scrollTo({ top: 150, left: 0, behavior: "smooth" });
        }}
      />
    </div>
  );
}
