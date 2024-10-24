const Node = require('../models/NodeModel');
const Rule = require('../models/RuleModel');

const parseRule = (ruleString) => {
    // Simple parsing logic; this should be expanded for full AST creation
    return new Node({ type: "operator", value: ruleString });
};

const createRule = async (req, res) => {
    const { rule } = req.body;
    const ast = parseRule(rule);
    const newRule = new Rule({ ast });
    await newRule.save();
    res.json(newRule);
};

const evaluateRule = (ast, data) => {
    if (ast.type === 'operand') {
        const [field, operator, value] = ast.value.split(' ');
        return eval(`${data[field]} ${operator} ${value}`);
    }
    return true; // Placeholder for operator handling
};

module.exports = { createRule, evaluateRule };
